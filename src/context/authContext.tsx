import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import SplashScreen from 'src/components/SplashScreen';
import axios from 'src/utils/axios';

// set auth session
export const setSession = (token: string | null) => {
  if (token) {
    axios.defaults.headers['x-access-token'] = token;
    const crispy_store = JSON.stringify({
      session: token,
    });
    localStorage.setItem('crispy_store', crispy_store);
  } else {
    localStorage.removeItem('crispy_store');
    delete axios.defaults.headers['x-access-token'];
  }
};

interface AuthState {
  user: object | null;
  isAuthenticated: boolean;
}

interface contextProps {
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext({} as contextProps);

export const useAuth = () => useContext(AuthContext);

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });
  const [loading, setLoading] = useState<boolean>(true);

  const initUser = () => {
    const crispy_store = window.localStorage.getItem('crispy_store');
    if (crispy_store) {
      const { session } = JSON.parse(crispy_store);
      setSession(session);

      axios
        .get('user/me')
        .then(({ data }) => {
          setAuthState((prevState) => ({
            ...prevState,
            user: data.data,
            isAuthenticated: true,
          }));
        })
        .catch(console.log)
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setAuthState((prevState) => ({
        ...prevState,
        user: null,
        isAuthenticated: false,
      }));
    }
  };

  useEffect(() => {
    initUser();
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    setAuthState((prevState) => ({
      ...prevState,
      user: null,
      isAuthenticated: false,
    }));
    setSession(null);
  };

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <AuthContext.Provider value={{ authState, setAuthState, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

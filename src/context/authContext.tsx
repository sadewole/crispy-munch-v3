import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import axios from 'src/utils/axios';
import jwtDecode from 'jwt-decode';

// set auth session
export const setSession = (token: string | null) => {
  if (token) {
    axios.defaults.headers['x-access-token'] = `Bearer ${token}`;
    const crispy_store = JSON.stringify({
      session: token,
    });
    localStorage.setItem('crispy_store', crispy_store);
  } else {
    localStorage.removeItem('crispy_store');
    delete axios.defaults.headers['x-access-token'];
  }
};

// Check valid session
const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  // @ts-ignore
  return decoded.exp > currentTime;
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
    const token = window.localStorage.getItem('token');

    if (token && isValidToken(token)) {
      setSession(token);

      axios
        .get('user/me')
        .then(({ data }) => {
          setAuthState((prevState) => ({
            ...prevState,
            user: data,
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

  return (
    <AuthContext.Provider value={{ authState, setAuthState, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

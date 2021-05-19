import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { ModalBody } from '@chakra-ui/modal';
import React, { useState } from 'react';
import axios from 'src/utils/axios';
import { useAuth, setSession } from 'src/context/authContext';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface inputType {
  label: string;
  name: 'email' | 'password';
  type: string;
}

interface inputState {
  email: string;
  password: string;
  submit: boolean | null;
}

const inputs: Array<inputType> = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
  },
];

const Login = () => {
  const { setAuthState } = useAuth();
  const [state, setState] = useState<inputState>({
    email: '',
    password: '',
    submit: null,
  });
  return (
    <ModalBody mb='10'>
      <Formik
        initialValues={state}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={(
          values,
          { setStatus, setSubmitting, setErrors, resetForm }
        ) => {
          const { email, password } = values;
          console.log(email, password);

          fetch(
            'https://crispy-munch-v3-backend.herokuapp.com/api/v1/user/signin',
            {
              method: 'POST',
              body: JSON.stringify({ email, password }),
            }
          )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
          //   axios
          //     .post('user/signin', { email, password })
          //     .then(({ data: { token, data } }) => {
          //       setSession(token);
          //       setAuthState((prevState) => ({
          //         ...prevState,
          //         user: data,
          //         isAuthenticated: true,
          //       }));
          //       setStatus({ success: true });
          //       resetForm();
          //     })
          //     .catch((err) => {
          //       console.log(err);
          //       setErrors({ submit: err.message });
          //     })
          //     .finally(() => setSubmitting(false));
        }}
      >
        {({
          errors,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmitting,
          setErrors,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {inputs.map(({ name, type, label }) => (
              <FormControl isRequired mb='2.5' key={name}>
                <FormLabel>{label}</FormLabel>
                <Input
                  name={name}
                  type={type}
                  placeholder={label}
                  value={values[name]}
                  border={
                    Boolean(touched[name] && errors[name]) ? 'red.500' : ''
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <Text color='red.500' m={1}>
                  {touched[name] && errors[name]}
                </Text>
              </FormControl>
            ))}
            <Button
              bgColor='red.800'
              _hover={{ bg: 'red.900' }}
              color='white'
              width='full'
            >
              Login
            </Button>
          </form>
        )}
      </Formik>
    </ModalBody>
  );
};

export default Login;

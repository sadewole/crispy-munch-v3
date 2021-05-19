import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
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

          axios
            .post('user/signin', JSON.stringify({ email, password }))
            .then(({ data: { token, data, success } }) => {
              setSession(token);
              setAuthState((prevState) => ({
                ...prevState,
                user: data,
                isAuthenticated: true,
              }));
              setStatus({ success });
              resetForm();
            })
            .catch((err) => {
              setErrors({ submit: err.message });
              setTimeout(() => {
                setErrors({ submit: '' });
              }, 5000);
            })
            .finally(() => setSubmitting(false));
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
              <FormControl
                isRequired
                mb='2.5'
                key={name}
                isInvalid={Boolean(touched[name] && errors[name])}
              >
                <FormLabel>{label}</FormLabel>
                <Input
                  name={name}
                  type={type}
                  placeholder={label}
                  value={values[name]}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <FormErrorMessage>
                  {touched[name] && errors[name]}
                </FormErrorMessage>
              </FormControl>
            ))}
            {errors.submit && (
              <Alert status='error'>
                <AlertIcon />
                <AlertDescription>{errors.submit}</AlertDescription>
              </Alert>
            )}
            <Button
              bgColor='red.800'
              _hover={{ bg: 'red.900' }}
              color='white'
              width='full'
              isLoading={isSubmitting}
              mt={1}
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

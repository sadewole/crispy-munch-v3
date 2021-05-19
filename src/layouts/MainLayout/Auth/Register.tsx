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
  name: 'email' | 'password' | 'firstName' | 'lastName';
  type: string;
}

interface inputState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  submit: boolean | null;
}

const inputs: Array<inputType> = [
  {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
  },
  {
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
  },
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

type RegisterProps = {
  handleClose: () => void;
};

const Register = ({ handleClose }: RegisterProps) => {
  const { setAuthState } = useAuth();
  const [state, setState] = useState<inputState>({
    firstName: '',
    lastName: '',
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
          firstName: Yup.string().required('First name is required'),
          lastName: Yup.string().required('Last name is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={(
          values,
          { setStatus, setSubmitting, setErrors, resetForm }
        ) => {
          const { submit, ...rest } = values;

          axios
            .post('user/signup', JSON.stringify({ ...rest }))
            .then(({ data: { data, success } }) => {
              setSession(data.token);
              setAuthState((prevState) => ({
                ...prevState,
                user: data,
                isAuthenticated: true,
              }));
              setStatus({ success });
              resetForm();
              handleClose();
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
            >
              Register
            </Button>
          </form>
        )}
      </Formik>
    </ModalBody>
  );
};

export default Register;

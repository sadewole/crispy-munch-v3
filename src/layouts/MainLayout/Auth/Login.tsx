import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { ModalBody } from '@chakra-ui/modal';
import React, { useState } from 'react';
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
        onSubmit={(values, { ...formiks }) => {
          const { submit, ...rest } = values;
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
          <form>
            {inputs.map(({ name, type, label }) => (
              <FormControl isRequired mb='2.5' key={name}>
                <FormLabel>{label}</FormLabel>
                <Input
                  name={name}
                  type={type}
                  placeholder={label}
                  value={values[name]}
                  className={
                    Boolean(touched[name] && errors[name])
                      ? 'border-red border'
                      : ''
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
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

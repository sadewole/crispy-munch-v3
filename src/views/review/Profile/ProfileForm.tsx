import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Alert, AlertIcon, AlertDescription, Textarea } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'src/store';
import { saveUserProfile } from 'src/slices/user';

type ProfileFormProps = {
  profile: { phone: string; address: string };
  setEditProfile: React.Dispatch<React.SetStateAction<string | boolean>>;
};

const ProfileForm = ({ profile, setEditProfile }: ProfileFormProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          phone: profile.phone || '',
          address: profile.address || '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          phone: Yup.string().required('Phone number is required'),
          address: Yup.string().required('Address is required'),
        })}
        onSubmit={async (
          values,
          { setStatus, setSubmitting, setErrors, resetForm }
        ) => {
          await dispatch(saveUserProfile({ ...values }));
          setSubmitting(false);
          resetForm();
          setEditProfile(false);
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
            <FormControl
              isRequired
              mb='2.5'
              isInvalid={Boolean(touched.phone && errors.phone)}
            >
              <FormLabel>Phone Number:</FormLabel>
              <Input
                name='phone'
                type='text'
                placeholder='Enter your phone number'
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormErrorMessage>
                {touched.phone && errors.phone}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              mb='2.5'
              isInvalid={Boolean(touched.phone && errors.phone)}
            >
              <FormLabel>Address:</FormLabel>
              <Textarea
                name='address'
                type='text'
                placeholder='Enter your address'
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormErrorMessage>
                {touched.address && errors.address}
              </FormErrorMessage>
            </FormControl>
            {errors.submit && (
              <Alert status='error'>
                <AlertIcon />
                <AlertDescription>{errors.submit}</AlertDescription>
              </Alert>
            )}
            <Button
              type='submit'
              bgColor='red.800'
              _hover={{ bg: 'red.900' }}
              color='white'
              isLoading={isSubmitting}
              mt={1}
            >
              Save
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForm;

import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { ModalBody } from '@chakra-ui/modal';
import React from 'react';

const inputs = [
    {
        label: 'First Name',
        name: 'firstName',
        type: 'text'
    },
    {
        label: 'Last Name',
        name: 'lastName',
        type: 'text'
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email'
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password'
    },
];

const Register = () => {
    return (
        <ModalBody>
            <form>
                {inputs.map(input => <FormControl isRequired>
                    <FormLabel>{input.label}</FormLabel>
                    <Input placeholder={input.label} name={input.name} type={input.type} />
                </FormControl>)}
            </form>
        </ModalBody>
    );
};

export default Register;

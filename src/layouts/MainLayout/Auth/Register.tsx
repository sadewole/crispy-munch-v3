import { Button } from '@chakra-ui/button';
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
        <ModalBody mb="10" >
            <form>
                {inputs.map(input => <FormControl isRequired mb="2.5" key={input.name} >
                    <FormLabel>{input.label}</FormLabel>
                    <Input placeholder={input.label} name={input.name} type={input.type} />
                </FormControl>)}
                <Button bgColor="red.800" _hover={{ bg: "red.900" }} color="white" width="full">Register</Button>
            </form>
        </ModalBody>
    );
};

export default Register;

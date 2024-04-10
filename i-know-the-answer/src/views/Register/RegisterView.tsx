import React, {useState} from "react";
import { Heading, FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { container, boxStyle, headingStyle, formControlStyle, formLabelStyle, inputStyle, cancelButtonStyle, registerButtonStyle } from './styles';

const RegisterView = () => {
    return (
        <div className="container" style={container}>
        <Box style={boxStyle}>
            <Heading style={headingStyle}>Register</Heading>
            <FormControl style={formControlStyle}>
                <FormLabel style={formLabelStyle}>Full name</FormLabel>
                <Input style={inputStyle} placeholder="Enter full name"></Input>
                <FormLabel style={formLabelStyle}>Username</FormLabel>
                <Input style={inputStyle} placeholder="Enter username"></Input>
                <FormLabel style={formLabelStyle}>Password</FormLabel>
                <Input style={inputStyle} placeholder="Enter password" type="password"></Input>
                <Button style={cancelButtonStyle}>Cancel</Button>
                <Button style={registerButtonStyle}>Register</Button>
            </FormControl>
        </Box>
        </div>
    )
};

export default RegisterView;

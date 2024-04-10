import React, {useState} from "react";
import { Heading, FormControl, FormLabel, Input, Button, Text, FormErrorMessage } from "@chakra-ui/react";
import { login, buttons, container, heading } from "./styles";
import { Link } from "react-router-dom";
import { authenticateUser } from "../../services/UserServices";
import { useNavigate } from "react-router-dom";


const LoginView = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [failedLogin, setFailedLogin] = useState<string>("");
    const navigate = useNavigate();

    async function submitForm() {
      try {
          setFailedLogin("");
          const user = await authenticateUser(username, password);
          
          if (user) {
              navigate("/dashboard")
          } else {
              setFailedLogin("Authentication failed");
          }
      } catch (error) {
          setFailedLogin("Failed to fetch");
          console.error("Authentication error:", error);
      }
  }

  const isUsernameError = username.length <= 3;
  const isPasswordError = password.length === 0;

  
    return (
      <div className="container" style={container}>
        <div className="input-fields" style={login}>
          <Heading style={heading}>I Know the Answer</Heading>
          <form>
            <FormControl id="username" isInvalid={isUsernameError}>
              <FormLabel>Username</FormLabel>
              <Input value={username} type="text" backgroundColor={"white"}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              {isUsernameError && (
                <FormErrorMessage>Username must be at least three characters</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="password" isInvalid={isPasswordError}>
              <FormLabel>Password</FormLabel>
              <Input value={password} type="password" backgroundColor={"white"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {isPasswordError && (
                <FormErrorMessage>Password must be be provided</FormErrorMessage>
              )}
            </FormControl>
          </form>
          <div className="buttons" style={buttons}>
            <Link to="/register">
                <Button backgroundColor={"#CDFCFB"}>Register</Button>
            </Link>
                <Button backgroundColor={"#CDFCFB"} onClick={() => submitForm()}>Login</Button>
                <Text>{failedLogin}</Text>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginView;
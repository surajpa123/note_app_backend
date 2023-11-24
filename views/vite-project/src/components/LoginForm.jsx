import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  Spinner
} from "@chakra-ui/react";
import axios from "axios";
import { useAsyncValue, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [auth,setAuth] = useState(false)

  const navigate = useNavigate();

  const toast = useToast();
  const Auth = useAuth();

  // console.log(Auth.login())

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    // console.log('Username:', username);
    // console.log('Password:', password);
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post("https://prickly-blue-chinchilla.cyclic.app/login", payload)
      .then((res) => {
        // alert(res.data)

        setLoading(true);
        const { message } = res.data;
        if (res.data.token) {
          Auth.login();
          Cookies.set("token", res.data.token, { expires: 7 });
        }

        // toast.promise(res, {
        //   success: { title: 'Promise resolved', description: 'Looks great' },
        //   error: { title: 'Promise rejected', description: 'Something wrong' },
        //   loading: { title: 'Promise pending', description: 'Please wait' },
        // })
      })
      .catch((err) => {
        console.log(err);
      });
    // postJSON(payload)
    console.log(payload);
    // Reset form fields
    setUsername("");
    setPassword("");
  };

  if (Auth.authenticated == true) {
    navigate("/");
  }

  console.log(loading, "load");

  return (
    <Box
      w="300px"
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      m="200px auto"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {
            loading ? <Spinner/> :   <Button colorScheme="blue" type="submit">
            Login
          </Button>
          }
        
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;

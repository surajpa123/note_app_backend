import { useState,useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [auth,setAuth] = useState(false)

  const navigate = useNavigate()
  const Auth = useAuth()
  
  // console.log(Auth.login())


  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    // console.log('Username:', username);
    // console.log('Password:', password);
    const payload = {
      username:username,
      password:password
    }

  axios.post("https://prickly-blue-chinchilla.cyclic.app/login", payload).then((res)=>{
      alert(res.data)
console.log(res)
      if(res.data.token){
        Auth.login()
        Cookies.set("token", res.data.token, {expires:7})
      }
    
    }).catch((err)=>{
      console.log(err)
    })
    // postJSON(payload)
    console.log(payload)
    // Reset form fields
    setUsername('');
    setPassword('');
  };



if(Auth.authenticated == true){
navigate("/")
}

  return (
    <Box  w="300px" p={4} borderWidth={1} borderRadius="md" boxShadow="md" m='200px auto'>
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
          <Button colorScheme="blue" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;

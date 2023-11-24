import { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here



    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    const payload = {
      username:username,
      password:password
    }

    axios.post("https://prickly-blue-chinchilla.cyclic.app/signup", payload).then((res)=>{
       console.log(res)
      alert(res.data)
    }).catch((err)=>{
      console.log(err)
    })

    // postJSON(payload)
    console.log(payload)


    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box w="300px" p={4} borderWidth={1} borderRadius="md" boxShadow="md" m = 'auto'>
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
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SignupForm;

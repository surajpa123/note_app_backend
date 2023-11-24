import React from 'react';
import { ChakraProvider, CSSReset, Box, Flex, Text, Link, Spacer } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box border={"1px solid red"}> 
    <Flex
      align="center"
    //   justify="space-between"
      p={4}
      bgGradient="linear(to-r, teal.500, cyan.500)"
      color="white"
      boxShadow="md"
    >
      <Box>
        <Link href="#" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="lg" fontWeight="bold" _hover={{ color: 'teal.300' }}>
            Home
          </Text>
        </Link>
      </Box>

      <Box>
        <Link href="#" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="lg" fontWeight="bold" _hover={{ color: 'teal.300' }}>
            Create Task
          </Text>
        </Link>
      </Box>

      <Box>
        <Link href="#" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="lg" fontWeight="bold" _hover={{ color: 'teal.300' }}>
            Profile
          </Text>
        </Link>
      </Box>
    </Flex>

    </Box>
  );
};


export default NavBar
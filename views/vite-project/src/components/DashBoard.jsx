import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  CSSReset,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Spacer,
  Heading,
  Grid,
  useToast,
  GridItem,
} from "@chakra-ui/react";
import NavBar from "./Navbar";
import Notes from "./Notes";
import axios from "axios";

import Cookies from "js-cookie";

const DashBoard = ({ isFilled }) => {
  const toast = useToast();
  const token = Cookies.get("token");

  const [tasks, setTasks] = useState([
    // Add more tasks as needed
  ]);

  const getData = () => {

    console.log('getting data')
    axios
      .get("https://prickly-blue-chinchilla.cyclic.app/notes", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, [isFilled]);

  console.log(tasks, "dashboard page");

  const handleDelete = (taskId) => {
    // Implement delete functionality based on the taskId
    // Update the tasks state after deletion
    // setTasks(updatedTasks);

    axios
      .delete(
        `https://prickly-blue-chinchilla.cyclic.app/notes/delete/${taskId}`
      )
      .then((res) => {
        const { message } = res.data;
        getData();

        toast({
          title: message,
          description: "Task has been successfully deleted!",
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
      });

    console.log(taskId);
  };

  const handleEdit = (taskId) => {
    // Implement edit functionality based on the taskId
    // You can navigate to an edit page or show a modal for editing
    console.log(`Edit task with ID: ${taskId}`);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Task Dashboard</Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {tasks.map((task) => (
          <GridItem key={task.id}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              position="relative"
              minHeight={"200px"}
            >
              <Text fontWeight="bold">{task.title}</Text>
              <Text>{task.content}</Text>
              {/* <Text>{`Created Date: ${task.createdDate}`}</Text> */}

              {/* Delete Button */}
              <Button
                position="absolute"
                bottom={2}
                left={2}
                colorScheme="red"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </Button>

              {/* Edit Button */}
              <Button
                position="absolute"
                bottom={2}
                right={2}
                colorScheme="teal"
                onClick={() => handleEdit(task._id)}
              >
                Edit
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default DashBoard;

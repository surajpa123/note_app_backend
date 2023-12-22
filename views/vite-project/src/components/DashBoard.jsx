import React, { useState, useEffect } from "react";
import {
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
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import TaskModal from "./TaskModal";

import { useAuth } from "./AuthContext";

import Cookies from "js-cookie";

const DashBoard = ({ isFilled }) => {
  const toast = useToast();
  const { tasks, getData } = useAuth();
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [tasks, setTasks] = useState([
  //   // Add more tasks as needed
  // ]);

  // const getData = () => {
  //   //   const [tasks,setTasks] = useState([])
  //     console.log('getting data');
  //     axios
  //       .get("https://prickly-blue-chinchilla.cyclic.app/notes", {
  //         headers: {
  //           Authorization: token,
  //         },
  //       })
  //       .then((res) => {
  //         setTasks(res.data);
  //         console.log("Called the get",  res.data)

  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   };

  useEffect(() => {
    getData();
  }, []);

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

  const handleEdit = (task) => {
    // Implement edit functionality based on the taskId
    // You can navigate to an edit page or show a modal for editing

    setSelectedTask(task);
    setIsModalOpen(true);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Notes Dashboard</Heading>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
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
                onClick={() => handleEdit(task)}
              >
                Edit
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
      />
    </Box>
  );
};

export default DashBoard;

import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  ChakraProvider,
  CSSReset,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Heading,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import DashBoard from "./DashBoard";
import axios from "axios";

const Notes = () => {
  const token = Cookies.get("token");
  const [isFilled, setIsFIlled] = useState(false);

  console.log(token, "hello");

  const Auth = useAuth();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const toast = useToast();

  useEffect(() => {
    if (token != undefined) {
      Auth.login();
    } else if (Auth.authenticated == false) {
      navigate("/login");
    }
  });

  const handleSubmit = () => {
    // You can perform any action with the form data here
    // For this example, let's just show a toast notification

    console.log(taskName, description);

    const payload = {
      title: taskName,
      content: description,
    };

    axios
      .post(
        "https://prickly-blue-chinchilla.cyclic.app/notes/create",
        payload,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        setTimeout(() => {
          setIsFIlled(false);
        }, 2000);
        setIsFIlled(true);
        toast({
          title: message,
          description: "Task has been successfully created!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" padding="5">
        {" "}
        <Heading mb={4}>Create Task</Heading> <Avatar name="suraj pathak" />
      </Box>
      <Box p={4}>
        <FormControl>
          <FormLabel>Task Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      <DashBoard isFilled={isFilled} />
    </>
  );
};

export default Notes;

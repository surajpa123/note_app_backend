// TaskModal.jsx
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";

import Cookies from "js-cookie";

import { useAuth } from "./AuthContext";

const TaskModal = ({ isOpen, onClose, onSave, task }) => {
  const [editedTask, setEditedTask] = useState({ ...task });
  const token = Cookies.get("token");
  const { tasks, getData } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset the edited task whenever the modal is opened
    setEditedTask({ ...task });

    // getData(token,setTasks)
  }, [isOpen, task]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const handleSave = () => {
    // Call the onSave callback with the edited task
    // onSave(editedTask);
    setLoading(true);

    console.log(editedTask, "edited");

    const payload = {
      title: editedTask.title,
      content: editedTask.content,
    };

    console.log(payload);
    axios
      .patch(
        `https://prickly-blue-chinchilla.cyclic.app/notes/update/${editedTask._id}`,
        payload
      )
      .then((res) => {
        console.log(res);
      });

    setTimeout(() => {
      getData();

      setLoading(false);
      onClose();
    }, 700);

    // Close the modal
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
            mb={4}
            placeholder="Task Title"
          />
          <Textarea
            name="content"
            value={editedTask.content}
            onChange={handleInputChange}
            placeholder="Task Description"
          />
        </ModalBody>
        <ModalFooter>
          {loading ? (
            <Spinner margin={"auto"} />
          ) : (
            <Button colorScheme="blue" onClick={handleSave}>
              Save Changes
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;

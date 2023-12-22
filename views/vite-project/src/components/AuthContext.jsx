import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

import Cookies from "js-cookie";

import axios from "axios";

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const token = Cookies.get("token");

  const [tasks, setTasks] = useState([
    // Add more tasks as needed
  ]);

  const login = () => {
    setAuthenticated(true);
  };

  useEffect(() => {
    getData();
  }, []);
  const logout = () => {
    setAuthenticated(false);
  };

  const getData = () => {
    //   const [tasks,setTasks] = useState([])
    console.log("getting data");
    axios
      .get("https://prickly-blue-chinchilla.cyclic.app/notes", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setTasks(res.data);
        console.log("Called the get", res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, login, logout, getData, tasks }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

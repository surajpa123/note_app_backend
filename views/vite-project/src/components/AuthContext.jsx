import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
  
    const login = () => {
      setAuthenticated(true);
    };
  
    const logout = () => {
      setAuthenticated(false);
    };

    const fetchData = ()=>{
      
    }
  
    return (
      <AuthContext.Provider value={{ authenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };
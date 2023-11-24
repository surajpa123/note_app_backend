import React, { useState } from "react";
import { Avatar } from "@chakra-ui/react";
import LogOutModal from "./LogOutModal";
import { useAuth } from "./AuthContext";
import Cookies from "js-cookie";

const UserProfile = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const Auth = useAuth();
  const userName = Cookies.get('userInfo')

  const handleLogout = () => {
    // Implement your logout logic here
    // ...
    // Close the modal after handling logout

    Auth.logout();

    Cookies.remove("token");
    Cookies.remove("userInfo");

    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <Avatar
        cursor={"pointer"}
        name={userName}
        onClick={() => setIsLogoutModalOpen(true)}
      />
      <LogOutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onLogout={handleLogout}
      />
    </>
  );
};

export default UserProfile;

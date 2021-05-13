import React from "react";
import Login from "../Components/User/Login/Index";
import { motion } from "framer-motion";

const AccountLogin = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}>
        <Login />{" "}
      </motion.div>
    </>
  );
};

export default AccountLogin;

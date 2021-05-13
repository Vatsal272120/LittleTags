import React from "react";
import Register from "../Components/User/Register/Index";
import { motion } from "framer-motion";

const AccountRegister = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}>
        <Register />
      </motion.div>
    </>
  );
};

export default AccountRegister;

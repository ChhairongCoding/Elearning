import React from "react";
import LoginForm from "../components/LoginForm";
import { motion } from "framer-motion";
const LoginScreen = () => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="h-[100vh] overflow-hidden content-center relative bg-gray-300"
    >
      <LoginForm />
    </motion.div>
  );
};

export default LoginScreen;

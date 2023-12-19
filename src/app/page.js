"use client";
import { useState } from "react";
import NotificationMessage from "./_components/homepage/NotificationMessage";
import { motion } from "framer-motion";

export default function Home() {
  const [isNotification, setNotification] = useState(true);

  return (
    <div className="homepage flex flex-col justify-center items-center">
      {isNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -70 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center items-center"
        >
          <NotificationMessage
            isNotification={isNotification}
            setNotification={setNotification}
          />
        </motion.div>
      )}
      <div className={`${isNotification ? "opacity-0" : "opacity-100"}`}>
        The rest of the body will go here
      </div>
    </div>
  );
}

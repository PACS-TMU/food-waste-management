"use client";
import { useState } from "react";
import NotificationMessage from "./_components/homepage/NotificationMessage";
import { motion } from "framer-motion";

export default function Home() {
  const [isNotification, setNotification] = useState(true);

  return (
    <div className="homepage flex justify-center mx-auto">
      {isNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -60 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center mx-auto"
        >
          <NotificationMessage
            isNotification={isNotification}
            setNotification={setNotification}
          />
        </motion.div>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import NotificationMessage from "./_components/homepage/NotificationMessage";

export default function Home() {
  const [isNotification, setNotification] = useState(true);

  return (
    <div className="homepage flex justify-center mx-auto">
      {isNotification && (
        <NotificationMessage
          isNotification={isNotification}
          setNotification={setNotification}
        />
      )}
    </div>
  );
}

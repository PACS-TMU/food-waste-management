"use client";
import { useState, useEffect } from "react";
import NotificationMessage from "./_components/homepage/NotificationMessage";
import Entry from "./_components/homepage/Entry";
import { motion } from "framer-motion";


export default function Home() {
  const [isNotification, setNotification] = useState(true);
  const [foodItems, setFoodItems] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/food-db.json');
        const data = await response.json();
        setFoodItems(data.slice(0, 8));
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchData();
  }, []);

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
      <div className={`body w-[95%] ${isNotification ? "opacity-0" : "opacity-100"} flex justify-center`}>
        <ul className="entry-list w-full">
          <li className="entry-item w-full grid grid-cols-1 items-center justify-center">
            {foodItems.map((foodItem) => (
              <div key={foodItem.id} className={`entry-wrapper w-full h-[20vh] my-2 rounded-md ${foodItem.id % 2 == 1 ? 'bg-blue-highlight' : 'bg-light-green'}`}>
                <Entry key={foodItem.id} foodItem={foodItem} />
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

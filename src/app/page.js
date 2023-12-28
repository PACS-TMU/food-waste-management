"use client";
import { useState, useEffect, useRef } from "react";
import NotificationMessage from "./_components/homepage/NotificationMessage";
import Entry from "./_components/homepage/Entry";
import ExpandedEntry from "./_components/homepage/ExpandedEntry";
import { useClickAway } from "react-use";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isNotification, setNotification] = useState(true);

  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/food-db.json");
        const data = await response.json();
        setFoodItems(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchData();
  }, []);

  const [isEntryExpanded, setEntryExpanded] = useState(false);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setEntryExpanded(false);
  });

  return (
    <div className="homepage flex flex-col justify-center items-center">
      {isNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -60 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center items-center"
        >
          <NotificationMessage
            isNotification={isNotification}
            setNotification={setNotification}
          />
        </motion.div>
      )}
      <div className={`body w-[95%] ${isNotification ? "opacity-0" : "opacity-100"} flex flex-col justify-center`}>
        <p className="text-center text-2xl pt-2">
          Tap an entry to see more details!
        </p>
        <ul className="entry-list w-full">
          <li className="entry-item w-full grid grid-cols-1 items-center justify-center">
            {foodItems.map((foodItem) => (
              <button
                key={foodItem.id}
                className={`entry-wrapper text-left w-full my-2 rounded-md ${foodItem.id % 2 == 1 ? "bg-blue-highlight" : "bg-light-green"}`}
                onClick={() => {
                  setEntryExpanded(foodItem.id);
                }}
              >
                <Entry key={foodItem.id} foodItem={foodItem} />
              </button>
            ))}
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {isEntryExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="fixed top-0 mt-[4.5rem] w-[95%] flex flex-col justify-center items-center"
          >
            <div className={`entry-wrapper w-full max-w-[750px] p-2 rounded-md ${foodItems[isEntryExpanded - 1].id % 2 == 1 ? "bg-blue-highlight" : "bg-light-green"}`}>
              <ExpandedEntry
                key={foodItems[isEntryExpanded - 1].id}
                foodItem={foodItems[isEntryExpanded - 1]}
                isExpanded={true}
                setEntryExpanded={setEntryExpanded}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

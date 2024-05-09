import React from "react";
import { db } from "./firebase";
import { 
  addDoc, 
  collection, 
  Timestamp 
} from "firebase/firestore";
import { Button, Notification } from "components"
import { NotificationData } from "./constants";
import { NotificationDataType } from "types";

const App: React.FC = () => {
  const showNotification = async (item: NotificationDataType) => {
    try {
      // Add notification to show
      await addDoc(collection(db, "notifications"), {...item, ...{created: Timestamp.now()}});
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-end">
      <Notification />
      <div className="flex items-center mb-5">
        {
          NotificationData.map((item, index) => {
            return (
              <div 
                className="px-2"
                key={index}
              >
                <Button
                  name={item.name}
                  click={() => showNotification(item)}
                ></Button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default App;

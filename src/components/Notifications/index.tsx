import React, { useState, useEffect } from 'react';
import { db } from "../../firebase";
import { 
  collection, 
  doc, 
  onSnapshot, 
  orderBy, 
  query,
  updateDoc
} from "firebase/firestore";
import { NotificationType } from 'types';

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  useEffect(() => {
    // Get notifications' real-time update
    onSnapshot(query(collection(db, "notifications"), orderBy("created")), (querySnapshot) => {
      const notification_data: NotificationType[] = [];

      querySnapshot.forEach((doc) => {
        notification_data.push({...doc.data(), ...{id: doc.id}} as NotificationType);
      });

      setNotifications(notification_data);
    });
  }, []);

  // Mark a notification read
  const markAsRead = async (id: string) => {
    await updateDoc(doc(db, "notifications", id), {is_read: true});
  };

  return (
    <div className='fixed top-0 left-0 w-screen px-5 pt-5 flex items-center justify-end'>
      <div className='w-1/4'>
        {
          notifications.map((notification, index) => {
            if (!notification.is_read) {
              return (
                <div 
                  className='p-3 mb-3 bg-violet-500 rounded-lg cursor-pointer'
                  key={index}
                  onClick={() => markAsRead(notification.id)}
                >
                  <p className='text-lg text-white'>{notification.name}</p>
                  <p className='text-md text-white'>{notification.message}</p>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
};

export default Notification;

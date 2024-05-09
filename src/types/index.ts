import { Timestamp } from "firebase/firestore"

export interface NotificationDataType {
    is_read: boolean,
    message: string,
    name: string,
}

export interface NotificationType {
    id: string,
    is_read: boolean,
    message: string,
    name: string,
    created: Timestamp
}
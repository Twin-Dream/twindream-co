import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../client";
import { Message } from "@/lib/types";

export const sendMessageAction = async ({
  name,
  email,
  message,
  company,
}: Message) => {
  return await addDoc(collection(firestore, "messages"), {
    name,
    email,
    message,
    company,
    createdAt: new Date(),
  });
};

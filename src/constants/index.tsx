import type { Message } from "~/components/ChatScreen";

export const chatData: Message[] = [
  { id: 1, sender: "user", message: "Hello, how are you?" },
  { id: 2, sender: "otherUser", message: "Hi there! I am good, thanks!" },
  {
    id: 3,
    sender: "user",
    message: "That's great to hear! What have you been up to?",
  },
  {
    id: 4,
    sender: "otherUser",
    message: "Not much, just working on some projects. How about you?",
  },
  {
    id: 5,
    sender: "user",
    message: "I've been busy with work too. Lots of deadlines!",
  },
  {
    id: 6,
    sender: "otherUser",
    message: "I understand. It can be hectic. Take breaks when needed!",
  },
  {
    id: 7,
    sender: "user",
    message: "Thanks for the advice. By the way, did you watch that new movie?",
  },
  { id: 8, sender: "otherUser", message: "No, not yet. Is it good?" },
  {
    id: 9,
    sender: "user",
    message: "Yeah, it's really good. You should check it out!",
  },
  {
    id: 10,
    sender: "otherUser",
    message:
      "I'll definitely add it to my watchlist. Thanks for the recommendation!",
  },
];

export const users = [
  { id: 1, name: "John Doe", numberOfUnreadMessages: 3 },
  { id: 2, name: "Alice Smith", numberOfUnreadMessages: 0 },
  { id: 3, name: "Bob Johnson", numberOfUnreadMessages: 5 },
  { id: 4, name: "Emily Davis", numberOfUnreadMessages: 2 },
  { id: 5, name: "Michael Brown", numberOfUnreadMessages: 7 },
  { id: 6, name: "Sophia Miller", numberOfUnreadMessages: 1 },
  { id: 7, name: "Daniel Wilson", numberOfUnreadMessages: 4 },
  { id: 8, name: "Olivia Taylor", numberOfUnreadMessages: 0 },
  { id: 9, name: "James Anderson", numberOfUnreadMessages: 2 },
  { id: 10, name: "Emma White", numberOfUnreadMessages: 6 },
  { id: 11, name: "Matthew Harris", numberOfUnreadMessages: 3 },
  { id: 12, name: "Ava Martinez", numberOfUnreadMessages: 1 },
  { id: 13, name: "William Jackson", numberOfUnreadMessages: 8 },
  { id: 14, name: "Grace Robinson", numberOfUnreadMessages: 2 },
  { id: 15, name: "Ethan Turner", numberOfUnreadMessages: 5 },
];

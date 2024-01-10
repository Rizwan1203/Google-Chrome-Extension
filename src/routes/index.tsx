import { Navigate } from "react-router-dom";
import Chat from "~/components/Chat";
import ChatScreen from "~/components/ChatScreen";
import Login from "~/components/Login";

export const routes = [
  {
    path: "/login",
    element: <Login onLogin={() => null} />,
  },
  {
    path: "/",
    index: true,
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/message",
    element: <ChatScreen />,
  },
];

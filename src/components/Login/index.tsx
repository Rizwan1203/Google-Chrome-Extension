// Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(email, password);
    navigate("/chat");
  };

  return (
    <div className="max-w-xs mx-auto my-10 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

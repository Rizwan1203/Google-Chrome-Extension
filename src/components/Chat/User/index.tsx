import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "~/constants";

const User = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 w-full mt-14">
      {users.map(({ id, name, numberOfUnreadMessages }) => (
        <div
          className="flex justify-between items-center w-full p-4 border-b cursor-pointer"
          key={id}
          onClick={() => navigate("/message")}
          onKeyDown={() => null}
        >
          <div className="">{name}</div>
          <div className="bg-violet-300 w-6 h-6 flex justify-center items-center rounded-full ">
            {numberOfUnreadMessages}
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;

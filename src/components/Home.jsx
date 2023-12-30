import React, { useState } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Home = () => {
  const socket = io("http://localhost:3001");
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  console.log("====================================");
  console.log(socket);
  console.log("====================================");

  let rooms = [
    {
      id: 1,
      name: "test room",
    },
    {
      id: 2,
      name: "test room",
    },
    {
      id: 3,
      name: "test room",
    },
    {
      id: 4,
      name: "test room",
    },
  ];

  const handleJoinClick = (id) => {
    console.log("id", id);
    navigate(`/chat-room/${id}`);
  };
  return (
    <div>
      <h1>Multiplayer Quiz App</h1>
      <div className="container"></div>
      <button>Create Room</button>
      <div className="room_container">
        {rooms.map((item) => {
          return (
            <>
              <div className="item_container">
                <div className="title_container">
                  <p>{item?.name}</p>
                </div>
                <div className="button_container">
                  <button
                    className="button"
                    onClick={() => handleJoinClick(item.id)}
                  >
                    Join
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

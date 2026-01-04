import React, { useEffect, useState, useCallback, useMemo } from "react";
import CampusMap from "./components/CampusMap";
import ChatPanel from "./ChatPanel";
import {
  connectWebSocket,
  disconnectWebSocket,
  sendMove,
  sendPrivateMessage,
} from "./websocket";
import { nearbyUsers } from "./proximity";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const WORLD_WIDTH = 2000;
const WORLD_HEIGHT = 1200;
const MOVE_SPEED = 10;

const World = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeChatUser, setActiveChatUser] = useState(null);

  /* -------------------- SESSION CHECK -------------------- */
  useEffect(() => {
    const token = localStorage.getItem("token");
    const createdAt = localStorage.getItem("token_created_at");

    if (!token || !createdAt) return;

    const MAX_SESSION_TIME = 2 * 60 * 1000;

    if (Date.now() - Number(createdAt) > MAX_SESSION_TIME) {
      localStorage.removeItem("token");
      localStorage.removeItem("token_created_at");
    }
  }, []);

  /* -------------------- CURRENT USER -------------------- */
  const currentUserEmail = useMemo(() => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    try {
      return JSON.parse(atob(token.split(".")[1])).sub;
    } catch {
      return null;
    }
  }, []);

  /* -------------------- WEBSOCKET -------------------- */
  useEffect(() => {
    if (!currentUserEmail) return;

    connectWebSocket(
      // JOIN
      (usersList) => setUsers(usersList),

      // MOVE
      (updatedUser) => {
        setUsers((prev) => {
          const exists = prev.some(
            (u) => u.userId === updatedUser.userId
          );

          if (exists) {
            return prev.map((u) =>
              u.userId === updatedUser.userId ? updatedUser : u
            );
          }

          return [...prev, updatedUser];
        });
      },

      // PRIVATE MESSAGE
      (msg) => {
        console.log("📩 PRIVATE MESSAGE RECEIVED:", msg);
        setMessages((prev) => [
          ...prev,
          {
            from: msg.from,
            to: currentUserEmail,
            content: msg.content,
          },
        ]);
      }
    );

    return () => {
      disconnectWebSocket();
    };
  }, [currentUserEmail]);

  /* -------------------- MOVEMENT -------------------- */
  const moveUser = useCallback(
    (dx, dy) => {
      const me = users.find((u) => u.userId === currentUserEmail);
      if (!me) return;

      sendMove({
        x: Math.max(0, Math.min(WORLD_WIDTH, me.x + dx)),
        y: Math.max(0, Math.min(WORLD_HEIGHT, me.y + dy)),
      });
    },
    [users, currentUserEmail]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp": moveUser(0, -MOVE_SPEED); break;
        case "ArrowDown": moveUser(0, MOVE_SPEED); break;
        case "ArrowLeft": moveUser(-MOVE_SPEED, 0); break;
        case "ArrowRight": moveUser(MOVE_SPEED, 0); break;
        default: return;
      }
      e.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveUser]);

  /* -------------------- PROXIMITY CHAT -------------------- */
  const me = users.find((u) => u.userId === currentUserEmail);

  useEffect(() => {
    if (!me) return;

    const nearby = nearbyUsers(me, users);

    if (activeChatUser) {
      const stillNearby = nearby.some(
        (u) => u.userId === activeChatUser
      );
      if (!stillNearby) setActiveChatUser(null);
      return;
    }

    if (nearby.length > 0) {
      setActiveChatUser(nearby[0].userId);
    }
  }, [me, users, activeChatUser]);

  /* -------------------- CHAT SEND -------------------- */
  const sendChatMessage = (text) => {
    if (!activeChatUser || !text.trim()) return;

    sendPrivateMessage(activeChatUser, text);

    setMessages((prev) => [
      ...prev,
      {
        from: currentUserEmail,
        to: activeChatUser,
        content: text,
      },
    ]);
  };

  /* -------------------- RENDER -------------------- */
  return (
    <>
      {/* On-Screen Movement Controls - Fixed to screen */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {/* Up arrow */}
        <button
          onClick={() => moveUser(0, -MOVE_SPEED)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
            margin: "0 auto",
            padding: "0",
          }}
          onMouseDown={(e) => e.currentTarget.style.opacity = "0.6"}
          onMouseUp={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          <ArrowUp size={32} strokeWidth={2} color="#333" />
        </button>

        <div style={{ display: "flex", gap: "5px" }}>
          {/* Left arrow */}
          <button
            onClick={() => moveUser(-MOVE_SPEED, 0)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
              padding: "0",
            }}
            onMouseDown={(e) => e.currentTarget.style.opacity = "0.6"}
            onMouseUp={(e) => e.currentTarget.style.opacity = "1"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            <ArrowLeft size={32} strokeWidth={2} color="#333" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => moveUser(MOVE_SPEED, 0)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
              padding: "0",
            }}
            onMouseDown={(e) => e.currentTarget.style.opacity = "0.6"}
            onMouseUp={(e) => e.currentTarget.style.opacity = "1"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            <ArrowRight size={32} strokeWidth={2} color="#333" />
          </button>
        </div>

        {/* Down arrow */}
        <button
          onClick={() => moveUser(0, MOVE_SPEED)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
            margin: "0 auto",
            padding: "0",
          }}
          onMouseDown={(e) => e.currentTarget.style.opacity = "0.6"}
          onMouseUp={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          <ArrowDown size={32} strokeWidth={2} color="#333" />
        </button>
      </div>

      <div
        style={{
          position: "relative",
          width: WORLD_WIDTH,
          height: WORLD_HEIGHT,
          margin: "0 auto",
          overflow: "hidden",
          border: "2px solid #333",
        }}
      >
        <CampusMap />

        {users.map((user) => (
          <div
            key={user.userId}
            style={{
              position: "absolute",
              left: user.x - 10,
              top: user.y - 10,
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor:
                user.userId === currentUserEmail ? "#ff0000" : "#0000ff",
              border: "2px solid #fff",
              zIndex: 10,
            }}
          />
        ))}
      </div>

      {activeChatUser && (
        <ChatPanel
          targetEmail={activeChatUser}
          messages={messages}
          onSend={sendChatMessage}
          currentUserEmail={currentUserEmail}
        />
      )}
    </>
  );
};

export default World;
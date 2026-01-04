// src/websocket.js
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

// 🔐 ENV VARIABLES (Vite)
const WS_URL =
    import.meta.env.VITE_WS_URL;

let stompClient = null;
let connecting = false; // prevents double init

/**
 * Connect to WebSocket (STOMP over SockJS)
 */
export function connectWebSocket(onUsers, onMove, onPrivateMsg) {
    if (stompClient || connecting) {
        console.warn("⚠️ WebSocket already initialized");
        return;
    }

    connecting = true;

    const token = localStorage.getItem("token");

    stompClient = new Client({
        // 🌍 PRODUCTION WebSocket URL
        webSocketFactory: () => new SockJS(WS_URL),

        // 🔐 JWT for WebSocket CONNECT
        connectHeaders: {
            Authorization: `Bearer ${token}`,
        },

        // ❌ disable auto reconnect (you control it)
        reconnectDelay: 0,

        debug: () => {},

        // ✅ CONNECTED
        onConnect: () => {
            console.log("✅ STOMP CONNECTED");
            connecting = false;

            // 👥 all active users
            stompClient.subscribe("/topic/users", (message) => {
                onUsers(JSON.parse(message.body));
            });

            // 📍 movement broadcast
            stompClient.subscribe("/topic/move", (message) => {
                onMove(JSON.parse(message.body));
            });

            // 🔒 private messages
            stompClient.subscribe("/user/queue/private", (message) => {
                console.log("📩 PRIVATE MSG:", message.body);
                onPrivateMsg(JSON.parse(message.body));
            });

            // 🚪 notify server user joined
            stompClient.publish({
                destination: "/app/join",
                body: "",
            });
        },

        // ❌ DISCONNECTED
        onDisconnect: () => {
            console.log("❌ STOMP DISCONNECTED");
            stompClient = null;
            connecting = false;
        },

        // ❌ STOMP ERROR
        onStompError: (frame) => {
            console.error("❌ STOMP ERROR:", frame.headers["message"]);
            console.error("Details:", frame.body);
        },
    });

    stompClient.activate();
}

/**
 * Disconnect WebSocket cleanly
 */
export function disconnectWebSocket() {
    if (stompClient) {
        stompClient.deactivate();
        stompClient = null;
        connecting = false;
        console.log("🔌 WebSocket disconnected");
    }
}

/**
 * Send movement update
 */
export function sendMove(update) {
    if (!stompClient) return;

    stompClient.publish({
        destination: "/app/move",
        body: JSON.stringify(update),
    });
}

/**
 * Send private message
 */
export function sendPrivateMessage(toEmail, content) {
    if (!stompClient) {
        console.warn("⚠️ STOMP NOT CONNECTED");
        return;
    }

    stompClient.publish({
        destination: "/app/chat.private",
        body: JSON.stringify({
            to: toEmail,
            content,
        }),
    });
}
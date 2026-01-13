🏫 Virtual GIETU Campus
Real-Time 2D Campus Simulation using WebSockets

A real-time 2D virtual campus where users can roam freely and communicate only when they are in close proximity, built using WebSockets (STOMP) to understand real-time systems and event-driven architectures.

📖 Table of Contents

Overview

Features

Motivation

System Architecture

How It Works

Real-Time Communication Logic

Tech Stack

What I Learned

Live Demo

Project Structure

Future Improvements

Feedback

Author

📌 Overview

The Virtual GIETU Campus is a real-time web application that simulates a virtual version of my college campus.
Users appear as live dots on a 2D map and can move using arrow keys. All movements and communications are synchronized in real time using WebSockets.

This project focuses on understanding how real-time systems work internally, rather than just consuming frameworks.

✨ Features

Real-time multi-user movement

Live position synchronization using WebSockets

Broadcast-based event propagation

Proximity-based private chat (~50 unit distance)

Email-based user identification for private messaging

Event-driven backend architecture

🎯 Motivation

While learning WebSocket protocols, I wanted to understand:

How real-time data flows between clients and servers

How broadcasting differs from private messaging

How state is synchronized across multiple users

Instead of building a simple chat application, I chose to build a virtual campus, which closely resembles real-world real-time systems.

🏗️ System Architecture

Clients connect to the backend using WebSockets (STOMP)

Backend maintains active user sessions and positions

Movement updates are broadcast to all subscribed clients

Private messages are routed using user email as a unique identifier

Frontend renders real-time state updates dynamically

🔄 How It Works

User connects to the server via WebSocket

User appears as a dot on the 2D campus

Movement is controlled using arrow keys

On every movement:

Updated coordinates are sent to the backend

Backend updates the state

Backend broadcasts the updated position

All subscribed clients instantly render the updated positions

When users are within proximity:

Private chat is enabled

Messages are routed to the correct session using email

💬 Real-Time Communication Logic
Broadcasting

Used for sharing real-time position updates

All connected users receive movement events

Private Messaging

Enabled only when users are within ~50 unit distance

Backend maps email → WebSocket session

Messages are delivered only to the intended recipient

🛠️ Tech Stack
Backend

Java

Spring Boot

WebSockets (STOMP)

PostgreSQL (Neon.tech – serverless)

Frontend

React

HTML, CSS, JavaScript

UI design assisted using Claude

Deployment

Backend: Render

Frontend: Netlify

Database: Neon.tech

🌱 What I Learned

WebSocket handshake and real-time message sharing protocol

Broadcasting vs private messaging

Real-time state synchronization

Event-driven architecture in practice

This project strengthened my understanding of real-time and distributed systems.

🔗 Live Demo

👉 Live Application: https://gietuverse.netlify.app

📂 Project Structure
virtual-gietu-campus/
│
├── backend/    # Spring Boot WebSocket server
├── frontend/   # React client
└── README.md

🚀 Future Improvements

Session cleanup and scalability improvements

Redis-based distributed messaging

Spatial partitioning for efficient proximity checks

Enhanced UI and animations

Authentication and authorization hardening

🤝 Feedback

Suggestions, improvements, and architectural feedback are welcome.
Guidance from professionals experienced in real-time systems or WebSockets would be highly appreciated.

👤 Author

Abinash
Final-year student | Backend & Systems-focused Developer
Interested in building scalable, real-world systems.

# 🧩 LostNFound Server

**LostNFound Server** is a robust backend solution for lost and found management, designed for communities such as universities, workplaces, public spaces, and events. This Node.js and TypeScript-powered REST API lets users post, search, and claim lost or found items with ease and security.

---

## ✨ Features

- **RESTful API:** Easily integrates with custom web or mobile clients.
- **User Authentication:** Secure registration and login with JWT authentication.
- **Item Reporting:** Add detailed lost/found posts with categories, descriptions, and status.
- **Search & Filter:** Find items by keywords, categories, or status.
- **Status Tracking:** Mark items as lost, found, or recovered.
- **Role-Based Access Control:** Admin features for moderation and user management.
- **Extensible Codebase:** Modular, clean, and scalable for future enhancements.

---

## 🛠️ Technology Stack

- **Backend:** Node.js, Express
- **Language:** TypeScript
- **Database:** MongoDB
- **Authentication:** JWT

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB instance

### Installation

1. **Clone the Repository**
    ```
    git clone https://github.com/isha-web1/lostNfound-server.git
    cd lostNfound-server
    ```
2. **Install Dependencies**
    ```
    npm install
    # or
    yarn install
    ```
3. **Configure Environment Variables**

    - Copy the example environment file and set your variables:

    ```
    cp .env.example .env
    # Edit .env with your MongoDB URI, JWT secret, etc.
    ```

4. **Run the Server**
    ```
    npm run dev
    # or
    yarn dev
    ```

    The server will start on the port defined in your `.env` (default is `3000`).

---

## 🧭 API Overview

The API includes endpoints for:

- **User management:** register, login, profile
- **Item management:** create, view, update, recover, delete
- **Admin controls:** manage users and posts (if admin role)

> *[Refer to API docs or code for detailed endpoint information.]*

---




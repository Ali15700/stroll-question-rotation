# Dynamic Question Rotation System

## Overview

This project is designed to dynamically assign region-specific questions to users based on weekly cycles. The system supports configurable cycle durations and can scale to handle millions of users.

### Features
- Region-specific question assignment
- Configurable cycle duration (default 7 days)
- Caching with Redis for efficient performance
- Cron jobs for automatic question rotation
- Scalable architecture with Node.js, MongoDB, and Redis

## Architecture

1. **Backend (Node.js/Express):** Manages user requests and assigns questions based on their region.
2. **Database (MongoDB):** Stores question data and cycle configurations.
3. **Cache (Redis):** Caches question assignments for quick retrieval.
4. **Cron Job:** Automatically rotates questions at the start of each cycle 

### API Endpoints

- `GET /question/:region`: Retrieves the current question for the given region e.g (Singapore,US).

## Project Structure and Thought Process

1. **Modular Structure**: Organized into `controllers`, `routes`, `models`, and `config`, keeping components manageable and easy to navigate.

2. **Controllers and Routes**:
   - `questionController.js` – Contains core business logic for question handling.
   - `questionRoutes.js` – Defines API endpoints, separating routing and logic for clarity.

3. **Models**:
   - `questionSchema.js` and `cycleSchema.js` – Define the data structure for question rotations, making data updates seamless.

4. **Cron Jobs**: Automates tasks, like rotating questions, for the dynamic "bonfire" feature without requiring manual updates.

5. **Environment Configuration**: `.env` stores configuration securely, supporting different environments (dev, production) for smooth deployment.

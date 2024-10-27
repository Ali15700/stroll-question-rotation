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




Machine Health Monitoring System

A real-time dashboard to monitor industrial machinery health using sensor data. Built with TypeScript, Express, and React, this system displays live sensor readings and operational status to help ensure timely maintenance and avoid breakdowns.

Features

Live sensor data visualization (temperature, voltage, current, vibration)
Machine status evaluation: Healthy, Warning, or Critical
Manual data refresh via button
Modular, scalable backend using Clean Architecture
Secure backend with Helmet and CORS
Responsive frontend built with Bootstrap


Project Structure

Backend

/domain: Entities and interfaces (use cases, repositories)
/application: Use cases and business logic
/infrastructure: MongoDB implementations and database setup
/presentation/http: Express controllers, routes, and middlewares
/setup: Entry point and server configuration

Frontend

/components: Reusable UI components
/utils: Sensor status logic
/types: TypeScript interfaces for sensor data


Tech Stack:

Frontend: React, TypeScript, Bootstrap
Backend: Node.js, Express, TypeScript
Database: MongoDB
Security: Helmet, CORS
Architecture: Clean Architecture


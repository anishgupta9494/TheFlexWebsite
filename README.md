# The Flex - Fitness Website

A modern, full-stack fitness website built with TypeScript, React, and Node.js/Express.

## Features

- 💪 **Workout Management** - Create, track, and manage your workouts
- 📊 **Progress Tracking** - Visualize your fitness journey with charts and analytics
- 👤 **User Profiles** - Manage your fitness profile and personal information
- 🎯 **Fitness Goals** - Set and track fitness objectives
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🔐 **Secure Authentication** - User registration and login
- ⚡ **Real-time Updates** - Instant data synchronization

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router
- Axios

### Backend
- Node.js
- Express
- TypeScript
- MongoDB
- JWT Authentication

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd the-flex
```

2. Install dependencies:
```bash
npm install
cd client && npm install && cd ../server && npm install && cd ..
```

3. Set up environment variables:

**Client (.env):**
```
VITE_API_URL=http://localhost:3000
```

**Server (.env):**
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/the-flex
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

### Running the Application

**Development Mode:**
```bash
# From root directory (runs both client and server)
npm run dev

# Or separately:
npm run client    # Terminal 1
npm run server    # Terminal 2
```

**Build for Production:**
```bash
npm run build
```

## Project Structure

```
the-flex/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components for routes
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API service layer
│   │   ├── types/         # TypeScript type definitions
│   │   └── styles/        # Global and component styles
│   ├── public/            # Static assets
│   └── package.json
├── server/                # Express backend application
│   ├── src/
│   │   ├── routes/        # API route handlers
│   │   ├── controllers/   # Business logic controllers
│   │   ├── models/        # MongoDB schema models
│   │   ├── middleware/    # Express middleware
│   │   └── utils/         # Helper utilities
│   ├── package.json
│   └── tsconfig.json
└── package.json           # Root workspace configuration
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Workouts
- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:id` - Get specific workout
- `POST /api/workouts` - Create new workout
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Progress
- `GET /api/progress` - Get progress data
- `POST /api/progress` - Log progress

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open an issue in the repository.

---

**The Flex** - Build your strength, track your progress, achieve your goals! 💪

# The Flex - Fitness Website Project

## Project Overview
"The Flex" is a full-stack TypeScript fitness website featuring user authentication, workout tracking, progress monitoring, and personalized fitness plans.

## Technology Stack
- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB
- **Build Tools**: Vite, TypeScript compiler
- **Code Quality**: ESLint, Prettier

## Getting Started

### Installation
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Development
```bash
# From root directory - runs both client and server
npm run dev

# Or run individually:
# Terminal 1: Client
cd client && npm run dev

# Terminal 2: Server
cd server && npm run dev
```

### Build
```bash
npm run build
```

## Project Structure
```
the-flex/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Route pages
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript types
│   │   └── styles/        # Global styles
│   └── package.json
├── server/                # Node/Express backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route handlers
│   │   ├── models/        # Database models
│   │   ├── middleware/    # Express middleware
│   │   └── utils/         # Helper functions
│   └── package.json
├── .gitignore
├── package.json           # Root workspace
└── README.md
```

## Features
- User Authentication & Authorization
- Workout Management
- Progress Tracking with Charts
- Exercise Database
- User Profiles
- Fitness Goals
- Dashboard Analytics

## Next Steps
1. Configure environment variables (.env files)
2. Set up MongoDB connection
3. Update API endpoints as needed
4. Customize components and pages
5. Add authentication provider

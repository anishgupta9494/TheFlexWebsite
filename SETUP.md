# The Flex - Setup Guide

## Getting Started

### Step 1: Install Dependencies

From the root directory:
```bash
npm install
```

This will install dependencies for both client and server (using npm workspaces).

Or install individually:
```bash
# Client
cd client && npm install && cd ..

# Server
cd server && npm install && cd ..
```

### Step 2: Configure Environment Variables

#### Server Configuration
1. Copy `server/.env.example` to `server/.env`:
```bash
cp server/.env.example server/.env
```

2. Update values in `server/.env`:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/the-flex
JWT_SECRET=your_very_secret_jwt_key_here
CORS_ORIGIN=http://localhost:5173
```

#### Client Configuration
1. Copy `client/.env.example` to `client/.env`:
```bash
cp client/.env.example client/.env
```

2. Verify `VITE_API_URL`:
```env
VITE_API_URL=http://localhost:3000
```

### Step 3: Setup MongoDB (Optional for Development)

**Option A: Local MongoDB**
```bash
# Install MongoDB and start it
mongod
```

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at https://www.mongodb.com/cloud/atlas
- Get your connection string
- Update `MONGODB_URI` in `server/.env`

### Step 4: Run Development Servers

#### Option A: Run Both (from root directory)
```bash
npm run dev
```

This runs both client and server in parallel.

#### Option B: Run Separately (recommended for debugging)

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run client
```

### Step 5: Access the Application

- **Frontend**: http://localhost:5173
- **Backend Health Check**: http://localhost:3000/health

## Testing the Application

1. **Homepage**: Navigate to http://localhost:5173
2. **Register**: Click "Sign Up" and create an account
3. **Login**: Use your credentials to log in
4. **Dashboard**: Explore the dashboard (stub pages)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login

### Workouts
- `GET /api/workouts` - Get all workouts
- `POST /api/workouts` - Create workout
- `GET /api/workouts/:id` - Get single workout
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout

### Users
- `GET /api/users/profile` - Get profile
- `PUT /api/users/profile` - Update profile

## Build for Production

```bash
npm run build
```

This creates optimized builds for both client and server:
- Client: `client/dist/`
- Server: `server/dist/`

## Docker Deployment

### Build and Run with Docker Compose
```bash
docker-compose up -d
```

### Services
- API Server: http://localhost:3000
- React App: http://localhost:5173
- MongoDB: localhost:27017

## Project Structure

```
the-flex/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API client services
│   │   ├── types/         # TypeScript types
│   │   └── styles/        # CSS and Tailwind
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware (auth, etc.)
│   │   ├── utils/         # Helper functions
│   │   └── index.ts       # Server entry point
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
├── .github/
│   └── copilot-instructions.md
├── .gitignore
├── .prettierrc
├── .eslintrc.json
├── docker-compose.yml
├── Dockerfile
├── package.json           # Root workspace
├── tsconfig.json
└── README.md
```

## Next Steps

1. **Add Database Models**: Replace mock data with MongoDB schemas
2. **Authentication**: Integrate real JWT tokens with database
3. **More Pages**: Create Dashboard, Workouts, Profile pages
4. **API Integration**: Connect frontend forms to backend API
5. **Testing**: Add unit and integration tests
6. **Styling**: Customize TailwindCSS theme
7. **Deployment**: Deploy to Vercel (frontend) and Heroku/Railway (backend)

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### Dependency Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors
```bash
# Clear build artifacts
rm -rf dist client/dist server/dist

# Rebuild
npm run build
```

## Git Setup

```bash
git init
git add .
git commit -m "Initial commit: The Flex fitness website"
git remote add origin <your-repo-url>
git push -u origin main
```

## Support

For issues and questions, refer to the documentation or create an issue in your repository.

---

**The Flex** - Build your strength, track your progress! 💪

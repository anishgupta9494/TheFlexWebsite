FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build
RUN npm run build

EXPOSE 3000 5173

CMD ["npm", "run", "dev"]

# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files dan install dependencies
COPY package*.json ./
RUN npm install

# Copy semua source code
COPY . .

# Expose port
EXPOSE 3000

# Jalankan dev server
CMD ["npm", "run", "dev"]

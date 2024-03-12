# Use Node.js as base image
FROM node:14-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 8080 (or any other port your server listens on)
EXPOSE 5000

# Command to run the Node.js server
CMD ["node", "index.js"]

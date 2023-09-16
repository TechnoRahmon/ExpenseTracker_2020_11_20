# Use the official Node.js runtime as a parent image
FROM node:14.20.0

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the server source code to the container
COPY . .

# Build the React client
WORKDIR /app/client
RUN npm install
RUN npm run build

# Expose the server port
EXPOSE 5000

# Run the Express server
WORKDIR /app
CMD ["node", "server.js"]

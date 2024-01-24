# Use the official Node.js image as the base image to create a builder in multi-stage build
FROM node:18.16.0 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# use the builder image to create the runner image
FROM builder AS runner

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Command to run your Node.js application
CMD [ "node", "index.js" ]

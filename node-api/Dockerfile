FROM node:latest

# Set the working directory
WORKDIR /node-api

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 3002

# Command to run your application
CMD ["npm", "start"]

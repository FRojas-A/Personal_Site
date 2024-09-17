# pull the node image
FROM node:18.20.0

# set the working directory
WORKDIR /app

# copy the package.json file
COPY package*.json ./

# install the dependencies
RUN npm install

# build the app
COPY . .

# expose port 3000
EXPOSE 3000

# start the app
CMD ["npm", "start"]
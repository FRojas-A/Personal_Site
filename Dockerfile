# pull the node image
FROM node:14

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
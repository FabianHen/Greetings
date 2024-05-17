# Builder container to compile typescript
FROM node:lts-alpine AS build
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json .

# Install any needed packages
RUN npm i

# Bundle app source
COPY . .

EXPOSE 4200

CMD [ "npm", "start" ]
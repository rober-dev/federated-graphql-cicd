FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

## The wait.sh script
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

# Install lerna
RUN npm i lerna -g

# Install lerna dependencies
COPY package*.json ./
COPY lerna.json .

RUN npm install

# Copy app source
COPY ./packages/api-auth ./packages/api-auth
COPY ./packages/api-common ./packages/api-common

# Lerna bootstrap
RUN lerna bootstrap

# Port to expose
EXPOSE 4001

ENV NODE_ENV=production

# Run app
CMD /wait && cd packages/api-auth && yarn start

FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install lerna dependencies
COPY package*.json ./
COPY lerna.json .

# Copy app source
COPY ./packages/api-auth ./packages/api-auth
COPY ./packages/api-common ./packages/api-common

RUN yarn

ENV NODE_ENV=production

EXPOSE 4001

# Run app
CMD cd packages/api-auth && yarn start

USER node
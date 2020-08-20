FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install lerna dependencies
COPY package*.json ./
COPY lerna.json .

# Copy app source
COPY ./packages/api ./packages/api
COPY ./packages/api-common ./packages/api-common

RUN yarn

ENV NODE_ENV=production

EXPOSE 4000

# Run app
CMD cd packages/api && yarn start

USER node
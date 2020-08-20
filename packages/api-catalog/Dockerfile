FROM node

# Create app directory
WORKDIR /usr/src/app

# Install lerna dependencies
COPY package*.json ./
COPY lerna.json .

# Copy app source
COPY ./packages/api-catalog ./packages/api-catalog
COPY ./packages/api-common ./packages/api-common

RUN yarn

ENV NODE_ENV=production

EXPOSE 4002

# Run app
CMD cd packages/api-catalog && yarn start

USER node
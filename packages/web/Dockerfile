FROM node

# Create app directory
WORKDIR /usr/src/app

# Install lerna
RUN npm i lerna -g

# Install lerna dependencies
COPY package*.json ./
COPY lerna.json .

# Copy app source
COPY ./packages/web ./packages/web

# Lerna bootstrap
RUN lerna bootstrap

# Port to expose
EXPOSE 3000

ENV NODE_ENV=production

# Run app
CMD cd packages/web && yarn build &&  yarn start

FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

## The wait.sh script
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

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
CMD /wait && cd packages/api && yarn start

USER node
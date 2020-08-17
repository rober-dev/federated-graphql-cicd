FROM node:alpine
WORKDIR /usr/src/app

## The wait.sh script
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

ENV NODE_ENV=production

# Install lerna dependencies
COPY package*.json ./
COPY lerna.json .
RUN npm install --production

# Copy app source
COPY ./packages/api-common ./packages/api-common
COPY ./packages/api-auth ./packages/api-auth

EXPOSE 4001
CMD /wait && cd ./packages/api-auth && yarn start
USER node

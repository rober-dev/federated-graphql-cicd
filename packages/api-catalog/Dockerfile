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
COPY ./packages/api-catalog ./packages/api-catalog

EXPOSE 4002
CMD /wait && cd ./packages/api-catalog && yarn start
USER node

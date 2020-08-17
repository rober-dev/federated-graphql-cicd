FROM node:alpine
WORKDIR /usr/src/app

## The wait.sh script
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

# Install yarn 
RUN npm install -g yarn

ENV NODE_ENV=production

# Install lerna dependencies
COPY package*.json ./

# Copy app source
COPY ./packages/api-common ./packages/api-common
COPY ./packages/api ./packages/api

RUN yarn install --frozen-lockfile

EXPOSE 4000
CMD /wait && cd ./packages/api && yarn start
USER node

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
COPY ./packages/web ./packages/web

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD /wait && cd ./packages/web && yarn build && yarn start
USER node

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

# Copy app source
COPY ./packages/web ./packages/web

# Lerna bootstrap
RUN lerna bootstrap

# Port to expose
EXPOSE 3000

ENV NODE_ENV=production

# Run app
CMD /wait && cd packages/web && yarn build &&  yarn start

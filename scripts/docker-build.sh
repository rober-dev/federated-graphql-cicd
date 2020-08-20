
#!/bin/bash

docker run -d --name federated-graphql-cicd-api -p 4000:4000 --network=host sincronize/federated-graphql-cicd-api:latest
docker run -d --name federated-graphql-cicd-api-auth -p 4001:4001 --network=host sincronize/federated-graphql-cicd-api-auth:latest
docker run -d --name federated-graphql-cicd-api-catalog -p 4002:4002 --network=host sincronize/federated-graphql-cicd-api-catalog:latest
docker run -d --name federated-graphql-cicd-web -p 3000:3000 --network=host sincronize/federated-graphql-cicd-web:latest
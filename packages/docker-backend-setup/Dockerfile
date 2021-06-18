FROM node:14.15.4-alpine3.10 AS base

WORKDIR /app

RUN apk update \ 
    && apk add bash \
    && rm -rf /var/cache/apk/*

COPY package*.json yarn.lock /app/

# copy source files
COPY src /app/src

COPY .env /app/.env
COPY .env.example /app/.env.example
COPY tsconfig.json /app/tsconfig.json
COPY tsconfig.prod.json /app/tsconfig.prod.json

RUN yarn install --frozen-lockfile 

CMD [ "yarn", "docker:start" ]
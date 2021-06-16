FROM node:14.15.4-alpine3.10 AS base

WORKDIR /app

RUN apk update && apk add bash

# Install dependencies
COPY package*.json yarn.lock /app/

COPY config/.env.docker /app/config/.env.test

# copy source files
COPY src /app/src

COPY tsconfig.json /app/tsconfig.json

COPY jest.config.js /app/jest.config.js

COPY bin /app/bin

COPY prisma /app/prisma

COPY codegen.yml /app/codegen.yml

RUN yarn install --frozen-lockfile 

RUN yarn generate
RUN yarn prisma generate
RUN yarn build && yarn start
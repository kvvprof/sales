FROM node:20.14.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci
FROM node:alpine3.18

WORKDIR /app

COPY . .
RUN npm install
RUN npm run start

EXPOSE 4200

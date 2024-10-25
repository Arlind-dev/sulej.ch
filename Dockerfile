FROM node:20-alpine3.20 AS build

WORKDIR /app

RUN npm install -g npm@latest

RUN npm install -g pnpm@latest

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run prepare

RUN pnpm run build

FROM nginx:1-alpine3.20

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

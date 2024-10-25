FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

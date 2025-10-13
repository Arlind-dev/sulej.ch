FROM ghcr.io/arlind-dev/sulej.ch:build-latest AS build

FROM nginx:alpine

LABEL org.opencontainers.image.description="Multi-Arch image running a static sulej.ch in nginx"

WORKDIR /usr/share/nginx/html

COPY --from=build /output ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
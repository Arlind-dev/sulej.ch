ARG BUILD_IMAGE=ghcr.io/arlind-dev/sulej.ch:build-latest
FROM --platform=$BUILDPLATFORM ${BUILD_IMAGE} AS build

FROM nginx:alpine

ARG BUILD_IMAGE

WORKDIR /usr/share/nginx/html
COPY --from=build /output ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

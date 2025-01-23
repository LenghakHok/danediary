# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /app

# copy package.json and bun.lockb
COPY ../../package.json ../../bun.lock ../../turbo.json ../../tsconfig.json ./ 
COPY ../../configs/ configs/
COPY ../../backend/auth backend/auth

RUN bun install
RUN bun --bun b:auth:build

# run the app
USER bun
EXPOSE 8000/tcp
ENTRYPOINT [ "bun", "b:auth:start" ]
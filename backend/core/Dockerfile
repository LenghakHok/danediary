# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.1 AS base
WORKDIR /app

# copy package.json and bun.lockb
COPY ../../package.json ../../bun.lockb ../../turbo.json ../../tsconfig.json ./ 
COPY ../../configs/ configs/
COPY ../../backend/auth backend/auth

RUN bun x jsr add @ryoppippi/unplugin-typia 
RUN bun install -p --frozen-lockfile
RUN bun b:auth:build

# run the app
USER bun
EXPOSE 8000/tcp
ENTRYPOINT [ "bun", "b:auth:start" ]
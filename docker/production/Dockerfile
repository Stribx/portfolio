ARG BUN_VERSION=1.2.7-alpine
ARG NGINX_VERSION=1.27.4-alpine3.21-slim

FROM oven/bun:${BUN_VERSION} AS deps
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

FROM oven/bun:${BUN_VERSION} AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_BASE_PATH=/containers/guillaumechambat-portfolio

RUN bun run build
RUN apk add --no-cache brotli
RUN find /app/out -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.json" \) \
  -exec gzip -9 -k {} \; \
  -exec brotli -q 11 -k {} \;

FROM nginx:${NGINX_VERSION} AS production

RUN apk add --no-cache brotli
RUN rm -rf /etc/nginx/conf.d/*

COPY --from=builder /app/out /etc/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

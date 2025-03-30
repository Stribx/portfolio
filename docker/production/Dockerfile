ARG BUN_VERSION=1.2.7-alpine

FROM oven/bun:${BUN_VERSION} AS base

FROM base AS deps
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_BASE_PATH=/containers/guillaumechambat-portfolio

RUN bun run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_BASE_PATH=/containers/guillaumechambat-portfolio

RUN adduser --system --uid 1001 nextjs
RUN mkdir .next
RUN chown nextjs:bun .next

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:bun /app/.next/standalone ./
COPY --from=builder --chown=nextjs:bun /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000

ENV HOSTNAME "0.0.0.0"
CMD ["bun", "server.js"]

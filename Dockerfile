FROM node:18-alpine AS base
FROM base AS deps
RUN echo https://mirror.yandex.ru/mirrors/alpine/v3.16/main > /etc/apk/repositories; \
    echo https://mirror.yandex.ru/mirrors/alpine/v3.16/community >> /etc/apk/repositories \
    echo https://mirror.yandex.ru/mirrors/alpine/v3.16/releases >> /etc/apk/repositories \
RUN apk add --no-cache libc6-compat
WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install --production
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci --force; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY .env.* ./
COPY tsconfig.json ./
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.env.* ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
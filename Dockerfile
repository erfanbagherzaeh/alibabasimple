FROM registry.insighttech.ir/bases/node:20-alpine3.17 AS deps
RUN apk update \
    && apk add --no-cache libc6-compat nasm autoconf automake bash libltdl libtool gcc make g++ zlib-dev
WORKDIR /app
COPY package.json package-lock.json ./
RUN yarn install --network-timeout 1000000

FROM registry.insighttech.ir/bases/node:20-alpine3.17 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM registry.insighttech.ir/bases/node:20-alpine3.17 AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["yarn", "run", "start"]

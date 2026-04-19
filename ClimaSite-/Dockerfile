FROM node:20-alpine AS client-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm ci
COPY client/ .
ARG VITE_API_URL=/api
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

FROM node:20-slim
WORKDIR /app
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
COPY server/package*.json ./
RUN npm ci --omit=dev
COPY server/ .
RUN npx prisma generate
COPY --from=client-builder /app/client/dist ./public
EXPOSE 3001
CMD ["sh", "-c", "npx prisma migrate deploy && node prisma/seed.js; node src/index.js"]

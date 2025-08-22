# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Runner stage
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/tsconfig.json ./
RUN npm install --production
EXPOSE 3000
CMD ["npx", "ts-node", "src/index.ts"]

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

run npm ci

COPY . .

RUN npm run build

EXPOSE 3000

# CMD ["npm", "start"]
CMD ["serve", "-s", "out"]

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

run npm ci

COPY . .

RUN npm run build

EXPOSE 3000

# Install serve globally
RUN npm install -g serve

CMD ["npm", "start"]
# CMD ["serve", "-s", "out"]

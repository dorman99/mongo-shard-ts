FROM node:14 as base
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g typescript

RUN npm install

COPY . .

EXPOSE 4001

RUN npm run build
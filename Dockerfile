FROM node:10

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 1024

CMD ["npm","run","dev"]

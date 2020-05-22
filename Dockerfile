FROM node:latest

EXPOSE 3000

WORKDIR /app

ADD package.json /app

RUN npm install

ADD . /app

CMD ["node", "dist/index"]
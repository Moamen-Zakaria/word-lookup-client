FROM node:16.17.0-alpine

WORKDIR /app

COPY ./build/ ./app

RUN npm install -g serve

CMD ["serve", "-s" ,  "app"]
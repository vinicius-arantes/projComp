# syntax=docker/dockerfile:1

FROM node:latest

WORKDIR /projdef

COPY . .

RUN rm -rf node_modules
RUN npm i

CMD ["node", "src/index.js"]

EXPOSE 3333
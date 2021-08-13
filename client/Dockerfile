FROM node:lts-alpine3.10

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY package.json /client/package.json
COPY src /client/src/
COPY public /client/public/

RUN npm install

RUN npm install -g react-scripts@4.0.3

EXPOSE 3000
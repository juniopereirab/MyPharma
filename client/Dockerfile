FROM node:lts-alpine3.10

WORKDIR /client/

CMD [ -d "node_modules" ] && npm start || npm ci && npm start

FROM node:lts-alpine3.10

WORKDIR /server/

CMD [ -d "node_modules" ] && npm start || npm ci && npm start
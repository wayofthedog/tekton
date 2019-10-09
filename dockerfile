FROM node:12.7.0-alpine


WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3200
CMD [ "node", "app.js" ]
USER node

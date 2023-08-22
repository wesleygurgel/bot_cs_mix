FROM node:16.9.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install nodemon --save-dev

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]


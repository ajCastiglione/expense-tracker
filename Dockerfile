FROM node:14.7.0

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

EXPOSE 5000

CMD ["npm", "run", "server"]

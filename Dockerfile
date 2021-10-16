FROM node:14-stretch

WORKDIR /usr/src/app

EXPOSE 8080

COPY . .

RUN npm install

RUN npx next build

CMD ["npx", "next", "start", "-p", "8080"]


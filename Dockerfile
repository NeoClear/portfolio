FROM node:14.15.3

EXPOSE 8000

EXPOSE 9000

WORKDIR /app

COPY . .

RUN yarn

RUN npm install -g gatsby

RUN gatsby build

CMD gatsby serve -H 0.0.0.0

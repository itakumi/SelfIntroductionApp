FROM node:18.16.0
WORKDIR /app

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

RUN apt update
RUN apt-get install curl

COPY package*.json ./

RUN npm install

COPY . ./

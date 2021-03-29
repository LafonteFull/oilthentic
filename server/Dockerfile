FROM node:12.18.0

USER root
WORKDIR /root

COPY . /root/

RUN node -v && npm install -g nodemon
RUN yarn install

EXPOSE 4000
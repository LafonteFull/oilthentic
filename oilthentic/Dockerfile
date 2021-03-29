FROM node:12.18.0

USER root
WORKDIR /root

COPY . /root/
RUN yarn install --network-timeout 100000
RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]
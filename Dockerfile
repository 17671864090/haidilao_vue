FROM node:12.13.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN npm install
COPY . /usr/src/app
EXPOSE 80
ENTRYPOINT ["node", "index.js"]
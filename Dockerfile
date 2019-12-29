FROM nginx
MAINTAINER longdb
COPY dist/  /usr/share/nginx/html/
RUN echo 'echo init ok!!'



#FROM node:lts-alpine
#WORKDIR /app
#COPY package*.json ./
#RUN npm install  --registry=https://registry.npm.taobao.org
#
#COPY . .
#RUN npm run build
#
## production stage
#FROM nginx
#COPY /dist /usr/share/nginx/html
#RUN echo '执行完毕'
#

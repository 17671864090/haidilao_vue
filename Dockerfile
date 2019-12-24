FROM nginx
MAINTAINER longdb
COPY dist/  /usr/share/nginx/html/
RUN echo 'echo init ok!!'

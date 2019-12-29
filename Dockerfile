




FROM nginx:1.15
WORKDIR /app

COPY . .

FROM nginx
COPY /dist /usr/share/nginx/html


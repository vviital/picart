FROM nginx

RUN apt-get update && apt-get install curl -y

COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]

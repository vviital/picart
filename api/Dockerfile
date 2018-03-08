FROM node:carbon

WORKDIR /home/app

RUN apt-get update

RUN apt-get install npm --yes

RUN npm install yarn -g -q

COPY . .

CMD ["sh", "entrypoint.sh"]

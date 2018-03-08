FROM node:carbon

WORKDIR /home/app

RUN apt-get update

RUN apt-get install npm --yes

RUN npm install yarn -g -q

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD ["yarn", "run", "start"]

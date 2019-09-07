FROM node:10.15.3

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

# ADD schema.sql /docker-entrypoint-initdb.d

# ADD init_db.sh ./init_db.sh
# RUN ./init_db.sh

EXPOSE 3306

CMD [ "npm", "start" ]
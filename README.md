# fridge app backend

backend service that is used for expo frontend client (React-Native) will have crud for fridge items and recommend recipes by ingredients by expiration date

## tech stack

    - docker
    - typescript
    - node.js
    - express
    - sequelize
    - postgres


## dependencies

# project commands

### start project

```
docker compose up -d db
npm run deb
```

### stop project

```
docker compose down
ctrl + c
```

### install dependencies

```
npm install
```


### project steps

    1. mkdir backend
    2. create README.md
    3. npm init -y
    4. npm install express express-async-handler body-parser cors pg pg-hstore sequelize @types/node @types/express @types/pg @types/pg-hstore @types/sequelize typescript ts-node --save
    5. make docker-compose.yml file and use postgres official image
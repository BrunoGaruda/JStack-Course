### Docker

- Criando o banco e a imagem
docker run --name pg -e POSTGRES_NAME=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

- Acessando o Container
docker exec -it pg bash

- acessando o PostgreSQL
psql -U root

-\l pra olhar as tabelas

- Criando o mycontacts
CREATE DATABASE mycontacts;

- conectar uma base de dados
\c mycontacts

- listando as tabelas
\dt



### Node

- Client do Node para fazer a ponte entre o código e base de dados
yarn add pg

- Caso não funcione
npm i -S pg

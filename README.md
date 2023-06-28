# MongoDB Relational Migrator Demo

This is a demo of the [MongoDB Relational Migrator](https://www.mongodb.com/try/download/relational-migrator) a free product that helps migrating from a RDBMS to MongoDB.

## Starting the demo

To run this demo you need to have [Docker](https://www.docker.com/) installed. Once Docker Desktop is running, you can write in a terminal:

```shell
git clone https://github.com/mongodb-developer/relational-migrator-demo
cd relational-migrator-demo
docker compose up
``` 

This will start 5 containers:
- an empty PostgreSQL container
- once this has been launched, will launch a container to import a database in PostgreSQL
- finally, an instance of [pgadmin](https://www.pgadmin.org/) an admin web-based tool for PostgreSQL, mainly to check there's data in there
- at the same time, a [MongoDB community Docker container](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/) will be started
- once that has been launched, another container will create a Database called `dvds`

## Running the demo

- you can access pgadmin at https://localhost:8080, (user: `sql@mongodb.com`, password=`password`) to show there's actually some data in that PostgreSQL DB. The connection to the PostgreSQL server is already configured. 
- once shown, access to MongoDB using MongoDB Compass to show the dvds Database, it should be empty. To connect to this MongoDB instance use this connection string: `mongodb://dvds:password@localhost:27017/dvds`
- now run the Relational Migrator and import data into PostgreSQL! 

## Stopping container and cleaning data

Just run the provided script `./clean-containers.sh`. This will clean all data that you imported into MongoDB

## Data

 The `dvdrental.zip` has been downloaded from [PostgreSQL Sample Database](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/)
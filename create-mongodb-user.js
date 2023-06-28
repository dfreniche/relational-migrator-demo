// use dvds
// run with mongosh - u mongodb - p password admin
db = db.getSiblingDB('dvds')
db.createUser(
    {
        user: "dvds",
        pwd: "password",
        roles: ["readWrite", "dbAdmin"]
    }
)
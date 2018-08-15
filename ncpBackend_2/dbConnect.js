import pg from 'pg'

var connectionString = "postgres://postgres:ncp@PostgreSQL_10/127.0.0.1:5432/ShopIt";

var pgClient = new pg.Client(connectionString);

pgClient.connect();

var createQuery = pgClient.query("CREATE TABLE userDetails(userName VARCHAR(20) NOT NULL)");

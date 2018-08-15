import express from 'express'
import bodyParser from 'body-parser'
import pg from 'pg'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/',function(req,res){
  console.log('Home Page');
});

var connectionString = "postgres://postgres:ncp@localhost:5432/ShopIt";
app.get('/createTable',function(req,res){
    var dbClient = new pg.Client(connectionString);

    dbClient.connect(function(err){
        if(err)
            throw err;
        else{
          console.log('Connected properly');
        var createQuery = "CREATE TABLE userDetails(name VARCHAR(50) NOT NULL, gender VARCHAR(10) NOT NULL, mobileNumber NUMERIC(15) NOT NULL, email VARCHAR(30) PRIMARY KEY NOT NULL, password VARCHAR(20) NOT NULL)";

        dbClient.query(createQuery, function(err){
            if(err)
                throw err;
            else {
                console.log('Table Created!')    ;
                res.end();
            }
        });

      }
    });
});

app.get('/insertUser',function(req,res){
    /*var dbClient = new pg.Client(connectionString);

    dbClient.connect(function(err){
        if(err)
            throw err;

        var query = "insert into userDetails values ($1)";
        var userName = "Pramothini Sekar";

        var contact = [fullname];

        dbClient.query(query , contact , function(err){
            if(err)
                throw err;
            else {
                console.log('Contact Inserted!')    ;
                res.end();
            }
        });
    });*/
    console.log("Entering this page");
    console.log(req.params);
});


app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

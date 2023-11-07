const express = require('express');
var cors = require('cors')
const app = express();
const port = 5000;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://thelordvoldermort97:AN8erx7lZvtiKjWk@cluster0.mimz9qb.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.use(cors())

app.get('/', async (req, res) => {
  await client.connect();
 
  // Send a ping to confirm a successful connection
  const db = client.db("portfolio");
  const portfolio = db.collection("portfolio-list");

  // Query for a movie that has the title 'The Room'
  const query = {  };

  // Execute query
  const movie = await portfolio.find(query).toArray();

  res.send(movie);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



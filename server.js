const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))


MongoClient.connect('mongodb://user1:webchallenges1@ds153093.mlab.com:53093/web-challenges',{ useNewUrlParser: true },function(err,client){
  if (err) return console.log(err)
  console.log('made it!')
  db = client.db('web-challenges') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })

  app.post('/challenges', (req, res) => {
    db.collection('challenges').insertOne(req.body, (err, result) => {
      if (err) return console.log(err)

      console.log('saved to database')
      // res.redirect('/')
    })
  })

  app.get('/', (req, res) => {
    console.log('yo!')
    db.collection('challenges').find().toArray(function(err, results) {
      console.log(results)
      // send HTML file populated with quotes here
    })
    // console.log(cursor)
  })


})



// app.get('/',function(req,res) {
//   res.send('Hello World!');
// });

let server=app.listen(4000,() => console.log('listening on 4000'));

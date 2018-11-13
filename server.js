const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser= require('body-parser')

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: true}))
ObjectId = require('mongodb').ObjectID

MongoClient.connect('mongodb://user1:webchallenges1@ds153093.mlab.com:53093/web-challenges', { useNewUrlParser: true }, (err,client) => {
  if (err) return console.log(err)

  db = client.db('web-challenges')
  app.listen(port, () => console.log('listening on 4000'));

  app.post('/challenges', (req, res) => {
    db.collection('challenges').insertOne(req.body, (err, result) => {
      if (err) return console.log(err)

      console.log('saved to database')
    })
  })

  app.post('/challenge-submission', (req, res) => {
    db.collection('submissions').insertOne(req.body, (err, result) => {
      if (err) return console.log(err)

      console.log('saved to database')
    })
  })

  app.get('/challenges', (req, res) => {
    db.collection('challenges').find().toArray((err, results) => {
      if (err) return console.log(err)

      res.send(results)
    })
  })

  app.get('/challenge', (req, res) => {
    db.collection('challenges').findOne({_id: new ObjectId(req.query.id)}, (err, challenge) => {
      if (err) return console.log(err)

      res.send(challenge)
    })
  })


})

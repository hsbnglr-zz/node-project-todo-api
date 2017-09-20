// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connetc to DB Server!!!');
  }
  console.log('Connected to MongoDB Server!!!');
  // db.collection('Todo').insertOne({
  //   name: 'Collection',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Error while inserting the reord', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('Todo').find({completed: false}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });
  // db.close();
});

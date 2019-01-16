const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.remove({}).then((result) => {
  console.log(result);
})

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5c3ece0c50d0779271e770e4').then((doc) => {
  console.log(doc);
});

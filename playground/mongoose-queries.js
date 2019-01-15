const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5c3dd6bc029620cee8c502722';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', JSON.stringify(todos, undefined, 2));
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', JSON.stringify(todo, undefined, 2));
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));


//User.findById

let id = '5c3cdb8810a22dc1da7df76b'

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User by id', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

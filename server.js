const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const User = require('./DataModel/customerModel.js')
const mongoose = require('mongoose');

server.use(bodyParser.json());

/*            -------------Routes------------------           */

server.get('/', (req, res) => {
	res.status(200).json({message: 'welcome'})
})

server.get('/users', (req,res) =>{
  User.find({})
      .then(users => res.status(200).json(users))
      .catch(error =>{
      req.statusCode(500).json({error: 'The information could not be retrieved.'})
  })
})

server.post('/users',(req,res) =>{
  const userInformation = req.body;
  if(userInformation.firstname){
      const user = new User(userInformation);
      user.save() // return a  promise
      .then(newUser => {
          res.status(201).json(newUser)
      })
      .catch(error => {
          res.status(500).json({
              error : 'There was an error in saving user to database'
          })
      })
  } else {
      res.status(400).json(
          {
              error: 'Please provide age,lastname and firstname of user'
          }
      )
  }
})

/*---------------------Database Connection-----------------------------*/

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/users',{useMongoClient:true})
.then(function(){
    server.listen(5000,function(){
        console.log('The databases are connected to server')
    });
})
.catch(function(err){
    console.log('Database Connection Failed')
})
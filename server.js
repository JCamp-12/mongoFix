const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const Customer = require('./DataModel/customerModel.js');
const mongoose = require('mongoose');

server.use(bodyParser.json());

/*            -------------Routes------------------           */

server.get('/', (req, res) => {
	res.status(200).json({message: 'welcome'})
})

server.post('/Taylor-Aid-Backend/customers', (req, res) => {
	const customerInfo = req.body;
    const customer = new Customer(customerInfo);
    customer.save()
      .then((newCustomer) => {
        res.status(201).json(newCustomer); //retuns newly created customer if all the info about the customer is valid
      })
      .catch((error) => {
        res.status(500).json({error: 'cannot save customer due to error in adding information'}); // returns error if all the information about th customer is not valid
      })
})

/*---------------------Database Connection-----------------------------*/

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tailorAid');



const port = 3050;

server.listen(port, () => console.log(`Server is running on port ${port}`));
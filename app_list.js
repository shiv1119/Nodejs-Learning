const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://adminUser:adminPassword@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })
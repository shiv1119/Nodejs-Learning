const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Employee = require('./emp');

const uri = "mongodb://adminUser:adminPassword@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

let newEmployee = new Employee({
    emp_name : "kashish",
    age : 21,
    location : "Noida",
    email : "kashish@gmail.com"
})

newEmployee.save().then(function(){
    Employee.find().then((data)=>{
        console.log("\n\nDocuments found in the database:");
        console.log(data);
        mongoose.connection.close();
    })
}).catch(function(error){
    console.log(error)
})
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Employee = require('./emp');

const uri = "mongodb://adminUser:adminPassword@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'}).then(()=>{
    console.log("Connection established");

    return Employee.insertMany([
        { "emp_name": "Ray Renolds", "age": 32, "location": "Austin", "email": "rayr@somewhere.com" },
        { "emp_name": "Matt Aniston", "age": 25, "location": "Houston", "email": "matta@somewhere.com" },
        { "emp_name": "Monica Perry", "age": 23, "location": "New Jersey", "email": "monicap@somewhere.com" },
        { "emp_name": "Rachel Tribbiani", "age": 28, "location": "Boston", "email": "rachelt@somewhere.com" }
    ])
}).then((data)=>{
    console.log("\n\nDocuments after inserting many records:");
    console.log(data);
}).catch((error)=>{
    console.log("Error: ", error);
}).finally(()=>{
    mongoose.connection.close()
})
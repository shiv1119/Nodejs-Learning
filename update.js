const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Employee = require('./emp');

const uri = "mongodb://adminUser:adminPassword@localhost:27017";

mongoose.connect(uri, {'dbName':'employeeDB'}).then(()=>{
    console.log("Connection established");
    return Employee.updateOne({emp_name:"kashish"},
        {email:"kashishkasaudhan@gmail.com"});
}).then((updateOneResult)=>{
    console.log("updated Docs for update one : ", updateOneResult);
    console.log("One record was updated");

    return Employee.updateMany({age:{$gt:21}},{
        location:"Bengaluru"
    })
    .then((updateManyResult)=>{
        console.log("Updated documents for update many: ", updateManyResult);
        console.log("Many records updated");
    })
}).catch((error)=>{
    console.error("Error: ", error);
}).finally(()=>{
    mongoose.connection.close();
})
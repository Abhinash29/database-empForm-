var mySql= require('mySql');

var Connection= mySql.createPool({

    host:'localhost',
    user:'root',
    password:'',
    //  database:'demo'
    database:'employee_form'
})

 module.exports=Connection;


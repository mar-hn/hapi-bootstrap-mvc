mysql   =require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'c_test'
});
db.connect(function(err){
    if(!err){
        console.log('Connected Succesfully');
    }
    else{
        throw err;
    }
   
});

module.exports = db;
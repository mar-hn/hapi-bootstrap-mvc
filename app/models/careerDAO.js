function getAllCareers(){
    return new Promise(function(resolve,reject){
        db.query('Select *from Carrera',function(err,results){
            if(!err){
                resolve(results);
            }
            else{
                throw err;
            }       
        })
    })
}
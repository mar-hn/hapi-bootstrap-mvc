//====================
// Dependencies
//====================
//None

//====================
// Methods
//====================
function getUserbyEmail(email)
{
    return new Promise(async function(resolve,reject)
    {
        const SQL = 
        `SELECT * FROM Users WHERE EMAIL = ?`;
        
        resolve(await fw.db.execute('local',SQL,[email]));
    });
}

module.exports = 
{
    getUserbyEmail: getUserbyEmail
}
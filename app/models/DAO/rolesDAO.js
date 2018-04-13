//====================
// Dependencies
//====================
//None

//====================
// Methods
//====================
function getRoles()
{
    return new Promise(async function(resolve,reject)
    {
        const SQL = 
        `SELECT * FROM Roles`;
        
        resolve(await fw.db.execute('local',SQL));
    });
}

module.exports = 
{
    getRoles
}
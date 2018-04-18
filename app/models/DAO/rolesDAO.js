//====================
// Dependencies
//====================
//None

//====================
// Methods
//====================
function getRoles()
{
    return fw.promise(async (resolve,reject) => 
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
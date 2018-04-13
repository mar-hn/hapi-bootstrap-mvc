//====================
// Dependencies
//====================
//None

//====================
// Methods
//====================
function getDepartments()
{
    return new Promise(async function(resolve,reject)
    {
        const SQL = 
        `SELECT * FROM Department`;
        
        resolve(await fw.db.execute('local',SQL));
    });
}

module.exports = 
{
    getDepartments
}
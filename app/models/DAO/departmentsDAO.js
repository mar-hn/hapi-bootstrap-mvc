//====================
// Dependencies
//====================
//None

//====================
// Methods
//====================
function getDepartments()
{
    return fw.promise(async (resolve,reject) => 
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
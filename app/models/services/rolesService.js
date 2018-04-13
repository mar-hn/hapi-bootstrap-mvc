//====================
// Dependencies
//====================
const rolesDAO = fw.getDAO('roles');

//====================
// Methods
//====================
function getRoles()
{
    return new Promise(async function(resolve,reject)
    {
        resolve(await rolesDAO.getRoles());
    });
}

module.exports =
{
    getRoles
}
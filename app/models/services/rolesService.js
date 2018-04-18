//====================
// Dependencies
//====================
const rolesDAO = fw.getDAO('roles');

//====================
// Methods
//====================
function getRoles()
{
    return fw.promise(async (resolve,reject) => 
    {
        resolve(await rolesDAO.getRoles());
    });
}

module.exports =
{
    getRoles
}
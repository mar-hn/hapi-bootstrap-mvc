//====================
// Dependencies
//====================
const departmentsDAO = fw.getDAO('departments');

//====================
// Methods
//====================
function getDepartments()
{
    return new Promise(async function(resolve,reject)
    {
        resolve(await departmentsDAO.getDepartments());
    });
}

module.exports =
{
    getDepartments
}
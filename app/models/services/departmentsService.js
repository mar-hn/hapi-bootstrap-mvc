//====================
// Dependencies
//====================
const departmentsDAO = fw.getDAO('departments');

//====================
// Methods
//====================
function getDepartments()
{
    return fw.promise(async (resolve,reject) => 
    {
        resolve(await departmentsDAO.getDepartments());
    });
}

module.exports =
{
    getDepartments
}
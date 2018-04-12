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

function getUsers()
{
    return new Promise(async function(resolve,reject)
    {
        const SQL = 
        `SELECT Users.*, Department.Name as 'Department', Roles.Role FROM Users
        INNER JOIN Roles ON Users.RoleId = Roles.ID
        INNER JOIN Department ON Users.DepartmentId = Department.ID`;
        resolve(await fw.db.execute('local',SQL));
    });
}

function getUser(id)
{
    return new Promise(async function(resolve,reject)
    {
        const SQL = 
        `SELECT Users.*, Department.Name as 'Department', Roles.Role FROM Users
        INNER JOIN Roles ON Users.RoleId = Roles.ID
        INNER JOIN Department ON Users.DepartmentId = Department.ID
        WHERE Users.ID = ?`;
        resolve(await fw.db.execute('local',SQL,[id]));
    });
}

module.exports = 
{
    getUserbyEmail,
    getUsers,
    getUser
}
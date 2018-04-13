//====================
// Dependencies
//====================
//None

//====================
// Methods
//====================
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

function getUserbyEmail(email)
{
    return new Promise(async function(resolve,reject)
    {
        const SQL = 
        `SELECT * FROM Users
        WHERE UPPER(Email) LIKE ?`;
        resolve(await fw.db.execute('local',SQL,[`%${email.toUpperCase()}%`]));
    });    
}

function addUser(data)
{
    return new Promise(async function(resolve,reject)
    {
        const SQL = 
        `INSERT INTO Users(Name,Salary,StartingDate,Email,Password,DepartmentId,RoleId,Salt)
        VALUES
        (?,?,?,?,?,?,?,?)`;
        resolve(await fw.db.execute('local',SQL,
        [
            data.Name,
            data.Salary, 
            data.StartingDate, 
            data.Email, 
            data.Password,
            data.DepartmentId, 
            data.RoleId,
            data.Salt
        ]));
    });    
}

function updateUser(data)
{
    return new Promise(async function(resolve,reject)
    {
        const SQL = 
        `UPDATE Users
        SET Salary = ?,
        StartingDate = ?,
        Email = ?,
        DepartmentId = ?,
        RoleId = ?
        WHERE ID = ?`;
        resolve(await fw.db.execute('local',SQL,
        [
            data.Salary, 
            data.StartingDate, 
            data.Email, 
            data.DepartmentId, 
            data.RoleId, 
            data.ID
        ]));
    });    
}

function deleteUser(id)
{
    return new Promise(async function(resolve,reject)
    {
        const SQL = 
        `DELETE FROM Users
        WHERE ID = ?`;
        resolve(await fw.db.execute('local',SQL,[id]));
    });
}


module.exports = 
{
    getUserbyEmail,
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}
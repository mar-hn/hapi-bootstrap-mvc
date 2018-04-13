//====================
// Dependencies
//====================
const userDAO = fw.getDAO('user');

//====================
// Methods
//====================
function validLogin(email, password)
{
    return new Promise(async function(resolve,reject)
    {
        let Account = await userDAO.getUserbyEmail(email);
        
        if(Account.length > 0)
        {        
            Account = Account[0];
            if(fw.utils.getMD5(password+Account.Salt) == Account.Password)
                resolve(Account);
        }
        
        resolve(false);
    })
}

function getUsers()
{
    return new Promise(async function(resolve,reject)
    {
        resolve(await userDAO.getUsers());
    });
}

function getUserbyEmail(email)
{
    return new Promise(async function(resolve,reject)
    {
        resolve(await userDAO.getUserbyEmail(email));
    });
}

function getUser(id)
{
    return new Promise(async function(resolve,reject)
    {
        resolve(await userDAO.getUser(id));
    });
}

function addUser(data)
{
    return new Promise(async function(resolve,reject)
    {
        resolve(await userDAO.addUser(data));
    });    
}

function updateUser(data)
{
    return new Promise(async function(resolve,reject)
    {
        resolve(await userDAO.updateUser(data));
    });    
}

function deleteUser(data)
{
    return new Promise(async function(resolve,reject)
    {
        resolve(await userDAO.deleteUser(data));
    });    
}



module.exports = 
{
    validLogin,
    getUsers,
    getUser,
    getUserbyEmail,
    addUser,
    updateUser,
    deleteUser
}
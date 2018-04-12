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


module.exports = 
{
    validLogin:validLogin,
    getUsers:getUsers
}
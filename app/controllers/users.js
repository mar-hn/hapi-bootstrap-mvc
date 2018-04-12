//====================
// Dependencies
//====================
const usersService = fw.getService('user');

/**
 * Render page
 * @param {Object} request
 * @param {Object} h 
 */
function render(request,h)
{
    return new Promise(async function(resolve,reject)
    {
        const users = await usersService.getUsers();
        console.log(request.auth.credentials);
        resolve(h.view('views/users', {users: users, session: request.auth.credentials}));
    });
    
}

module.exports = 
{
    render : render
}
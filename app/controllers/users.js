//====================
// Dependencies
//====================
const usersService = fw.getService('user');

/**
 * Render Main page
 * @param {Object} request
 * @param {Object} h 
 */
function renderMain(request,h)
{
    return new Promise(async function(resolve,reject)
    {
        const users = await usersService.getUsers();
        resolve(h.view('views/users/main', {users, session: request.auth.credentials}));
    });    
}

/**
 * Render Main page
 * @param {Object} request
 * @param {Object} h 
 */
function renderView(request,h)
{
    return new Promise(async function(resolve,reject)
    {
        const user = await usersService.getUser(request.query.id);
        
        if(user.length != 1)
        {
            resolve(h.redirect('/users'));
            return;
        }

        resolve(h.view('views/users/view', {user:user[0], session: request.auth.credentials}));
    });
    
}


module.exports = 
{
    renderMain,
    renderView
}
/**
 * Render page
 * @param {Object} request
 * @param {Object} header
 */
function render(request, h) 
{
    return new Promise(async function (resolve, reject) {
        resolve(h.view('views/login', { title: 'Login' }, {layout: 'login.layout'}));
    });
}

function login(request,h)
{
    return new Promise(async function (resolve, reject) 
    {
        // Check if it's already authenticated
        if (request.auth.isAuthenticated)
            resolve(h.redirect('/'));
        
        //Create UUID
        const jsid = fw.utils.getUUID();
        // Save data to session
        await request.server.app.cache.set(jsid, { test:'' }, 0);
        request.cookieAuth.set({ jsid });

        resolve(h.redirect('/'));
    });
}


function logout(request, h)
{
    request.server.app.cache.drop(request.state['jsid'].jsid);
    request.cookieAuth.clear();
    return h.redirect('/');
}

module.exports =
{
    render: render,
    login: login,
    logout: logout
}
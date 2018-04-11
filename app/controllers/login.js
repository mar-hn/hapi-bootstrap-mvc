/**
 * Render page
 * @param {Object} header
 * @param {Object} reply 
 */
function render(header, reply) {
    return new Promise(async function (resolve, reject) {
        resolve(reply.view('views/login', { title: 'Login' }, {layout: 'login.layout'}));
    });

}

module.exports =
    {
        render: render
    }
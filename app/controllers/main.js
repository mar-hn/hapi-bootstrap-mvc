/**
 * Render page
 * @param {Object} header
 * @param {Object} reply 
 */
function render(header,reply)
{
    return new Promise(async function(resolve,reject)
    {
        // console.log(await fw.db.execute('local','SELECT * from Department'));
        // console.log('hola');
        resolve(reply.view('views/index', {title:'Home Page'}));
    });
    
}

module.exports = 
{
    render : render
}
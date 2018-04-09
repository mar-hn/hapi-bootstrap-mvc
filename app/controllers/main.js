/**
 * Render page
 * @param {Object} header
 * @param {Object} reply 
 */
function render(header,reply)
{
    return reply.view('views/index', {title:'Home Page'});
}

module.exports = 
{
    render : render
}
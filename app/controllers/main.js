function render(header,reply)
{
    return reply.view('views/index', {title:'Home Page'});
}

module.exports = 
{
    render : render
}
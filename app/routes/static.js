module.exports = 
[
  { 
    method: 'GET', path: '/assets/{path*}', 
    handler: 
    {
        directory: 
        {
            path: `${__dirname}/../assets`,
            index: false
        }
    },
    options:
    {
        auth: { mode: 'try' },
        plugins: { 'hapi-auth-cookie': { redirectTo: false } }
    }
 }
];
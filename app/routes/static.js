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
    }
 } 
];
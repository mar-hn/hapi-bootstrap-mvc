module.exports = 
[
    {
      method: 'GET',
      path: '/test',
      options: {
        handler: fw.getController('main').render
      }
    }
];
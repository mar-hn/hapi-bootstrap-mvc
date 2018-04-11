const loginCtrl = fw.getController('login');

module.exports =
[
    { method: 'GET', path: '/login', options: { handler: loginCtrl.render, tags: ['cstTag'] } }
];
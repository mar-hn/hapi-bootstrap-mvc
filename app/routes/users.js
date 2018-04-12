const UsersCtrl = fw.getController('users');

module.exports = 
[
  { method: 'GET', path: '/users', options: { handler: UsersCtrl.render } }
];
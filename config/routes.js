module.exports.routes = {
  '/': {
    view: 'homepage'
  },
  'post /post': 'PostsController.create',
  'get /post': 'PostsController.index',
  'get /post/:id': 'PostsController.show',
  'delete /post/:id': 'PostsController.delete',
  'patch /post/:id': 'PostsController.update',
  'post /users/login': 'UsersController.login',
  'post /users/register': 'UsersController.register',
  'delete /users/logout': 'UsersController.logout'
};

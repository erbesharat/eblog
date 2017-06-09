module.exports.policies = {
  PostsController: {
    create: ['sessionAuth'],
    update: ['sessionAuth'],
    delete: ['sessionAuth']
  }
};

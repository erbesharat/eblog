/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    const {title, author, body} = req.body
    Post.create({title, author, body})
    .then(post => {
      return res.json(post)
    })
    .catch(err => res.negotiate(err))
  },
  show: function(req, res){
    const {id} = req.params
    Post.findOne(id)
    .then(post => {
      return res.json(post)
    })
    .catch(err => res.negotiate(err))
  },
  index: function(req, res){
    Post.find()
    .then(posts => {
      return res.json(posts)
    })
    .catch(err => res.negotiate(err))
  },
  delete: function(req, res){
    const {id} = req.params
    Post.destroy(id)
    .then(post => {
      return res.json(post)
    })
    .catch(err => res.negotiate(err))
  },
  update: function(req, res){
    const {title, author, body} = req.body
    const {id} = req.params
    Post.update(id, {title, author, body})
    .then(post => {
      return res.json(post)
    })
    .catch(err => res.negotiate(err))
  }
};


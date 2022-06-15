// Import file index.js in models
const db = require('../models')
const Post = db.posts

exports.findAll = (req, res) => {
    Post.find().then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving posts."
        })
    })
}

exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.publised : false
    })

    post.save(post).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error occured while creating post."
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Post.findById(id).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error occured while retrieving post."
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body).then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Post not found with id " + id
            })
        }

        res.send({
            message: "Post updated successfully."
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error occured while updating post."
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Post.findByIdAndRemove(id).then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Post not found with id " + id
            })
        }

        res.send({
            message: "Post deleted successfully."
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Some error occured while deleting post."
        })
    })
}
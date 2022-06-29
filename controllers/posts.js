const postsRouter = require("express").Router()
const Post = require("../models/post")

postsRouter.get("/", async (request, response) => {
    const posts = await Post.find({})
    response.json(posts)
})

postsRouter.post("/", async (request, response) => {
    const { author, content } = request.body
    const newPost = new Post({
        author,
        content,
        date: new Date()
    })
    const savedPost = await newPost.save()
    response.status(201).json(savedPost)
})

module.exports = postsRouter
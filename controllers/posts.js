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

postsRouter.put("/:id", async (request, response) => {
    const {author, content, date, comments, likes} = request.body
    const postObj = {
        author,
        content,
        date,
        comments,
        likes,
    }
    const updated = await Post.findByIdAndUpdate(request.params.id, postObj, { new: true })
    response.status(200).json(updated)
})

module.exports = postsRouter
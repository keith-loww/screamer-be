const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        minlength: 3
    },
    content: {
        type: String,
        required: true,
        minlength: 5
    },
    date: {
        type: Date,
        required: true,
    },
    comments: [
        {
            type: String
        }
    ],
    likes: {
        type: Number
    }
})

postSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("Post", postSchema)
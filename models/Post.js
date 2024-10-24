const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
        title: {
            type:String,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        userId :{ type: mongoose.Schema.Types.ObjectId , ref: "user" }
});

const PostModel = mongoose.model("post",PostSchema);

module.exports = PostModel;



const { createPost, deletePost } = require("../controllers/postController.js");
const ensureAuthenticated = require("../middlewares/Auth.js");
const PostModel = require("../models/Post.js");
const UserModel = require("../models/User.js");


const router = require('express').Router();


router.get('/',ensureAuthenticated, async (req,res) => {
    console.log(req.user);

    const posts = await PostModel.find().populate("userId", "name"); // Populate 'userId' with the 'name' field



    
    res.status(200).json(posts)
})

/******************** Multer code ************************/
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        /* ../frontend/public/uploads */
        /* ./public/data/uploads/ */ 
        cb(null, '../frontend/public/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});
const upload = multer({ storage });

router.post('/create', ensureAuthenticated, upload.single('photo'), createPost);


/************************  Delete Router  **********************/

router.delete('/delete',ensureAuthenticated, deletePost);


module.exports = router;
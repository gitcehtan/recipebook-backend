const express = require("express");
const app = express();
require("./models/db.js");
const AuthRouter = require("./routes/AuthRouter.js");
const PostRouter = require("./routes/PostRouter.js");

const cors = require('cors');
app.use(cors({
  origin: 'https://recipebook-frontend.onrender.com' // Allow requests from your frontend
}));

require("dotenv").config();
app.use(cors()); 
app.use(express.json());


let PORT = process.env.PORT || 8080;

app.use('/auth',AuthRouter); 
app.use('/posts',PostRouter); 

app.use('/uploads', express.static('public/uploads'));


app.listen(PORT, () => {
    console.log(`Server running fine  at ${PORT}`);
})
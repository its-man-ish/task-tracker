const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String       
    },
    category:{
        type:String
    },
    body:{
        type:Text
    },
    author:{
        type:String
    }
},{
    timestamps:true
});

const blogDB = mongoose.model('blogs',blogSchema);

export default blogDB
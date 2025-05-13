const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/skill-bridge')
.then(()=>{
    console.log("database connected to monngodb"); 
})
.catch((err)=>{
    console.log(`database connected to err${err}`);
})
module.exports = mongoose;



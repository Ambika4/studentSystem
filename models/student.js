const mongoose = require('mongoose');

//schema for the student
const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll:{
        type:Number,
        required:true,
        unique:true
    },
    favouriteSport:{
        type:String,
        required:true
    },
   
    marks:{
        type:Number,
        required:true
    }
});
//module.exports=studentSchema;

//the is a collection i.e is a model
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;
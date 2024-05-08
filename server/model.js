const mongoose=require('mongoose')


var StudentModel=new mongoose.Schema({
	eamil:{
		type:String,
		required:true,
	},
	password:{
		type:Array,
		required:true,
	}
}
)
module.exports = mongoose.model('students',StudentModel); 
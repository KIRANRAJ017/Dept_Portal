const mongoose=require('mongoose')


var StudentCoCurrModel=new mongoose.Schema({
	regno:{
		type:String,
		required:true,
	},
	name:{
		type:String,
		required:true,
	},
	tech_event:{
		type:String,
		required:true,
	},
	nontech_event:{
		type:String,
		required:true,
	},
	prize:{
		type:String,
		required:true,
	},
    college_name:{
		type:String,
		required:true,
	},
    link:{
		type:String,
		required:true,
	}
	}
)
module.exports = mongoose.model('stu_cocurr',StudentCoCurrModel); 
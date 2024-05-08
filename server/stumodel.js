const mongoose=require('mongoose')


var StudentModel=new mongoose.Schema({
	name:{
		type:String,
		required:true,
	},
	rollno:{
		type:String,
		required:true,
	},
	eamil:{
		type:String,
		required:true,
	},
	password:{
		type:String,
		required:true,
	},
	dob:{
		type:String,
		required:true,
	},
	parentmob:{
		type:String,
		required:true,
	},
	address:{
		type:String,
		required:true,
	}
	/*achivement: {
		type: {
		  name: { type: String, required: true },
		  date: { type: Number, required: true },
		  event: { type: String, required: true },
		  members: { type: Array, required: true },
		},
		required: true,
	}*/
	}
)
module.exports = mongoose.model('students',StudentModel); 
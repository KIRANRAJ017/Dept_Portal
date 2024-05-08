const mongoose=require('mongoose')


var FacultyModel=new mongoose.Schema({
	eamil:{
		type:String,
		required:true,
	},
	password:{
		type:String,
		required:true,
	},
	achivement: {
		type: {
		  name: { type: String, required: true },
		  date: { type: Number, required: true },
		  event: { type: String, required: true },
		  members: { type: Array, required: true },
		},
		required: true,
	}
	}
)
module.exports = mongoose.model('faculties',FacultyModel); 
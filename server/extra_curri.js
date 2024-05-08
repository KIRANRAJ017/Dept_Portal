const mongoose=require('mongoose')


var StudentExCurrModel=new mongoose.Schema({
	regno:{
		type:String,
		required:true,
	},
	name:{
		type:String,
		required:true,
	},
	event_name:{
		type:String,
		required:true,
	},
	prize:{
		type:String,
		required:true,
	},
    date:{
		type:String,
		required:true,
	}
	}
)
module.exports = mongoose.model('stu_excurr',StudentExCurrModel); 
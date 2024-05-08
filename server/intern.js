const mongoose=require('mongoose')


var StudentInternModel=new mongoose.Schema({
	regno:{
		type:String,
		required:true,
	},
	name:{
		type:String,
		required:true,
	},
	comp_name:{
		type:String,
		required:true,
	},
	title:{
		type:String,
		required:true,
	},
	tot_days:{
		type:String,
		required:true,
	},
    from:{
		type:String,
		required:true,
	},
    to:{
		type:String,
		required:true,
	},
    link:{
		type:String,
		required:true,
	}
	}
)
module.exports = mongoose.model('intern',StudentInternModel); 
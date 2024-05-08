const mongoose=require('mongoose')


var StudentModel=new mongoose.Schema({
    name:{
		type:String,
		required:true,
	},
	eamil:{
		type:String,
		required:true,
	},
    toeamil:{
		type:String,
		required:true,
	},
	pquery:{
		type:String,
		required:true,
	}
}
)
module.exports = mongoose.model('query',StudentModel); 
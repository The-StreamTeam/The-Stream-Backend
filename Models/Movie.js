const mongoose	=require('mongoose');
const MovieSchema=new mongoose.Schema(
	{
	title:{type:String ,required:true,unique:true},
	desc:{type:String},
	backdrop_path:{type:String},
	poster_path:{type:String},
	trailer:{type:String},
	video:{type:String},
	first_air_date:{type:String},
	limit:{type:Number},
	genre:{type:String},
	isSeries:{type:Boolean,default:false},
	
},
{timeStamps:true});
module.exports=mongoose.model("Movie",MovieSchema);
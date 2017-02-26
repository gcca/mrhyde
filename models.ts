import * as mongoose from 'mongoose';

export let User = mongoose.model("User", new Schema({
	username: {type:String, require:true, unique:true},
	password: {type:String, require:true},
	profile_id: {type:Schema.Types.ObjectId, require:true}
}));

export let Profile = mongoose.model("Profile", new Schema({
	id: {type:Schema.Types.ObjectId, require:true, unique:true}
}));

export let Transaction = mongoose.model("Transaction", new Schema({
	id: {type:Schema.Types.ObjectId, require:true, unique:true},
	amount: Number,
	type: {type:String, require:true},
	date: Date,
	profile_id: {type:Schema.Types.ObjectId, require:true}
}));
const mongoose = require("mongoose");
var config = require("config");
// config.get(db);
// const URI="mongodb+srv://alihanfi:alihanfi@cluster0.l5s9s.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = async () => {
	await mongoose.connect(config.get("db"), {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	console.log("Connection Establish successfully");
};

module.exports = connectDB;

const maongoose = require('mongoose');
const connectDB = async () => {
    try{
        await maongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useunifiedTopology: true,
        });
        console.log('Mongoose connected successfully');
    }
    catch (error){
        console.error('Mongoose connection failed:', error.message);
        process.exit(1);

    }
}
module.exports = connectDB;
import mongoose from "mongoose"

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("MongoDB URL:", process.env.MONGODB_URL);

        mongoose.connection.on('connected', () => console.log("Database connected"));
        mongoose.connection.on('error', (err) => console.error("MongoDB connection error:", err));

        await mongoose.connect(`${process.env.MONGODB_URL}/greencart`)
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1);
    }
}

export default connectDB;
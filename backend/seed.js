import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const seedUser = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/clinic');
        console.log('MongoDB Connected');

        // Check if admin exists
        const userExists = await User.findOne({ username: 'admin' });
        if (userExists) {
            console.log('Admin user already exists');
            process.exit();
        }

        // Create admin user
        const user = new User({
            username: 'admin',
            password: 'password123', // Will be hashed by pre-save hook
            role: 'admin'
        });

        await user.save();
        console.log('Admin user created: admin / password123');
        process.exit();
    } catch (error) {
        console.error('Error seeding user:', error);
        process.exit(1);
    }
};

seedUser();

import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'],
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    medicalHistory: {
        type: String,
        default: '',
    }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;

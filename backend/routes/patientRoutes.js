import express from 'express';
import Patient from '../models/Patient.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Create a new patient
// @route   POST /api/patients
// @access  Private
router.post('/', protect, async (req, res) => {
    try {
        const patient = new Patient(req.body);
        const createdPatient = await patient.save();
        res.status(201).json(createdPatient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc    Get all patients
// @route   GET /api/patients
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        const patients = await Patient.find({}).sort({ createdAt: -1 });
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get patient by ID
// @route   GET /api/patients/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (patient) {
            res.json(patient);
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

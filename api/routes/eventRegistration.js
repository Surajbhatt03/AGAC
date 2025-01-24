// // api/routes/eventRegistration.js

import express from 'express';
import Registration from '../models/registration.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, options } = req.body;
    const newRegistration = new Registration({ name, email, phone, options });
    await newRegistration.save();
    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit registration.', error });
  }
});
// GET - Fetch all registrations for admin
router.get('/registrations', async (req, res) => {
    try {
      const registrations = await Registration.find().sort({ createdAt: -1 });
      res.json(registrations);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch registrations.', error });
    }
  });

export default router;

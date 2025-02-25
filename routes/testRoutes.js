const express = require('express');
const router = express.Router();
const Test = require('../models/TestModel');  // Import the Test model

// GET all records
router.get('/', async (req, res) => {
    try {
        const data = await Test.find();  // Find all records
        res.json(data);  // Send back the data in JSON format
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new record
router.post('/', async (req, res) => {
    try {
        const newData = new Test(req.body);  // Create a new instance of the model
        const savedData = await newData.save();  // Save it to the database
        res.status(201).json(savedData);  // Return the saved data
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT (Update a record by ID)
router.put('/:id', async (req, res) => {
    try {
        const updatedData = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedData);  // Return the updated record
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a record by ID
router.delete('/:id', async (req, res) => {
    try {
        await Test.findByIdAndDelete(req.params.id);  // Delete by ID
        res.json({ message: 'Deleted successfully' });  // Return a success message
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;  // Export the router to be used in the main server file

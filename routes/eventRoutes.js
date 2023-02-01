'use strict';

const express = require('express');
const eventController = require('../controllers/eventControllers');
const router = express.Router();

router.get('/events', eventController.getAllEvents);
router.get('/event/:id', eventController.getEvent);
router.post('/event', eventController.addEvent);
router.put('/event/:id', eventController.updatEvent);
router.delete('/event/:id', eventController.deleteEvent);

module.exports = {
   routes: router
};
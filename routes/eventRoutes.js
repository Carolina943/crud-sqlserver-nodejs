'use strict';

const express = require('express');
const eventController = require('../controllers/eventControllers');
const router = express.Router();

router.get('/events', eventController.getAllEvents);
router.get('/event/:id', eventController.getEvent);

module.exports = {
   routes: router
};
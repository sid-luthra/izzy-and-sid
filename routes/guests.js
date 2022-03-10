var express = require('express');
var router = express.Router();

var guests_controller = require('../controllers/guests_controller');

// GET contact info form
router.get('/contact-info', guests_controller.contact_input_get);

// POST request for contact info
router.post('/contact-info', guests_controller.contact_input_post);

// GET success page
router.get('/contact-success', (req, res) => {
    res.send('Success!');
});

module.exports = router;
const express = require('express');

const router = express.Router();

const formController = require('../controllers/form_controller');

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect('/contact-info');
});

// GET contact info form
router.get('/contact-info', formController.contact_input_get);

// POST request for contact info
router.post('/contact-info', formController.contact_input_post);

// GET success page
router.get('/contact-success', formController.contact_success_get);

// GET admin page
router.get('/admin', formController.contact_list_get);

module.exports = router;

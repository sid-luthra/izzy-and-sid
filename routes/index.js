var express = require('express');
var router = express.Router();

var form_controller = require('../controllers/form_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/contact-info');
});

// GET contact info form
router.get('/contact-info', form_controller.contact_input_get);

// POST request for contact info
router.post('/contact-info', form_controller.contact_input_post);

// GET success page
router.get('/contact-success', form_controller.contact_success_get);

// GET admin page
router.get('/admin', form_controller.contact_list_get);

module.exports = router;

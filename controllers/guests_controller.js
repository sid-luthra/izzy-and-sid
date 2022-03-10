var Guest = require('../models/guest');

// Display all guests.
exports.contact_list = function(req, res) {
    res.send('NOT IMPLEMENTED: full contact list');
}

// Display contact form on GET.
exports.contact_input_get = function(req, res) {
    res.render('contact_form');
};

// Handle contact input on POST.
exports.contact_input_post = function(req, res) {
    res.send('NOT IMPLEMENTED: form submit POST');
};
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
exports.contact_input_post = function(req, res, next) {
    var guest = new Guest(
        { family_name: req.body.familyName }
    );
    guest.save(function (err) {
        if (err) {return next(err); }
        res.redirect('/contact-success')
    })
};

// Display success page on GET.
exports.contact_success_get = function(req, res) {
    res.render('contact_success');
};

// Display all contact info.
exports.contact_list_get = function(req, res, next) {
    Guest.find({})
        .sort({family_name : 1})
        .exec(function (err, list_contacts) {
            if (err) { return next(err); }
            res.render('contact_list', { contact_list: list_contacts });
        });
};
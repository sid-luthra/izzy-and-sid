var Guest = require('../models/guest');
const { body, validationResult } = require("express-validator");
const { request } = require('express');

// Display all guests.
exports.contact_list = function(req, res) {
    res.send('NOT IMPLEMENTED: full contact list');
}

// Display contact form on GET.
exports.contact_input_get = function(req, res) {
    res.render('contact_form');
};

// Handle contact input on POST.
exports.contact_input_post = [
    
    body('familyName', 'Family name required').trim().isLength({min: 1}).escape(),
    body('familyName', 'Family name should be longer').trim().isLength({min: 3}).escape(),

    function(req, res, next) {

        // Extract validation errors from a request.
        const errors = validationResult(req);

        var guest = new Guest(
            { 
                family_name: req.body.familyName,
                address: {
                    streetAddress: req.body.streetAddress,
                    aptSuite: req.body.aptSuite,
                    city: req.body.city,
                    state: req.body.state,
                    zip: req.body.zip
                }
            }
        );

        if (!errors.isEmpty()) {
            res.render('contact_form', { guest: guest, errors: errors.array()});
            return;
        }
        else {
            guest.save(function (err) {
                if (err) {return next(err); }
                res.redirect('/contact-success')
            })
        } 
    }];

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
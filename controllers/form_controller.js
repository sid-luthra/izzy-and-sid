var Guest = require('../models/guest');
const { body, validationResult } = require("express-validator");
const { request } = require('express');

var list_countries = [
    {name: 'Afghanistan'},
    {name: 'Albania'},
    {name: 'Algeria'},
    {name: 'Andorra'},
    {name: 'Angola'},
    {name: 'Antigua & Barbuda'},
    {name: 'Argentina'},
    {name: 'Armenia'},
    {name: 'Australia'},
    {name: 'Austria'},
    {name: 'Azerbaijan'},
    {name: 'Bahamas'},
    {name: 'Bahrain'},
    {name: 'Bangladesh'},
    {name: 'Barbados'},
    {name: 'Belarus'},
    {name: 'Belgium'},
    {name: 'Belize'},
    {name: 'Benin'},
    {name: 'Bhutan'},
    {name: 'Bolivia'},
    {name: 'Bosnia Herzegovina'},
    {name: 'Botswana'},
    {name: 'Brazil'},
    {name: 'Brunei'},
    {name: 'Bulgaria'},
    {name: 'Burkina'},
    {name: 'Burundi'},
    {name: 'Cambodia'},
    {name: 'Cameroon'},
    {name: 'Canada'},
    {name: 'Cape Verde'},
    {name: 'Central African Rep'},
    {name: 'Chad'},
    {name: 'Chile'},
    {name: 'China'},
    {name: 'Colombia'},
    {name: 'Comoros'},
    {name: 'Congo'},
    {name: 'Costa Rica'},
    {name: 'Croatia'},
    {name: 'Cuba'},
    {name: 'Cyprus'},
    {name: 'Czech Republic'},
    {name: 'Denmark'},
    {name: 'Djibouti'},
    {name: 'Dominica'},
    {name: 'Dominican Republic'},
    {name: 'East Timor'},
    {name: 'Ecuador'},
    {name: 'Egypt'},
    {name: 'El Salvador'},
    {name: 'Equatorial Guinea'},
    {name: 'Eritrea'},
    {name: 'Estonia'},
    {name: 'Ethiopia'},
    {name: 'Fiji'},
    {name: 'Finland'},
    {name: 'France'},
    {name: 'Gabon'},
    {name: 'Gambia'},
    {name: 'Georgia'},
    {name: 'Germany'},
    {name: 'Ghana'},
    {name: 'Greece'},
    {name: 'Grenada'},
    {name: 'Guatemala'},
    {name: 'Guinea'},
    {name: 'Guinea-Bissau'},
    {name: 'Guyana'},
    {name: 'Haiti'},
    {name: 'Honduras'},
    {name: 'Hungary'},
    {name: 'Iceland'},
    {name: 'India'},
    {name: 'Indonesia'},
    {name: 'Iran'},
    {name: 'Iraq'},
    {name: 'Ireland'},
    {name: 'Israel'},
    {name: 'Italy'},
    {name: 'Ivory Coast'},
    {name: 'Jamaica'},
    {name: 'Japan'},
    {name: 'Jordan'},
    {name: 'Kazakhstan'},
    {name: 'Kenya'},
    {name: 'Kiribati'},
    {name: 'Korea North'},
    {name: 'Korea South'},
    {name: 'Kosovo'},
    {name: 'Kuwait'},
    {name: 'Kyrgyzstan'},
    {name: 'Laos'},
    {name: 'Latvia'},
    {name: 'Lebanon'},
    {name: 'Lesotho'},
    {name: 'Liberia'},
    {name: 'Libya'},
    {name: 'Liechtenstein'},
    {name: 'Lithuania'},
    {name: 'Luxembourg'},
    {name: 'Macedonia'},
    {name: 'Madagascar'},
    {name: 'Malawi'},
    {name: 'Malaysia'},
    {name: 'Maldives'},
    {name: 'Mali'},
    {name: 'Malta'},
    {name: 'Marshall Islands'},
    {name: 'Mauritania'},
    {name: 'Mauritius'},
    {name: 'Mexico'},
    {name: 'Micronesia'},
    {name: 'Moldova'},
    {name: 'Monaco'},
    {name: 'Mongolia'},
    {name: 'Montenegro'},
    {name: 'Morocco'},
    {name: 'Mozambique'},
    {name: 'Myanmar'},
    {name: 'Namibia'},
    {name: 'Nauru'},
    {name: 'Nepal'},
    {name: 'Netherlands'},
    {name: 'New Zealand'},
    {name: 'Nicaragua'},
    {name: 'Niger'},
    {name: 'Nigeria'},
    {name: 'Norway'},
    {name: 'Oman'},
    {name: 'Pakistan'},
    {name: 'Palau'},
    {name: 'Panama'},
    {name: 'Papua New Guinea'},
    {name: 'Paraguay'},
    {name: 'Peru'},
    {name: 'Philippines'},
    {name: 'Poland'},
    {name: 'Portugal'},
    {name: 'Qatar'},
    {name: 'Romania'},
    {name: 'Russian Federation'},
    {name: 'Rwanda'},
    {name: 'St Kitts & Nevis'},
    {name: 'St Lucia'},
    {name: 'Saint Vincent & the Grenadines'},
    {name: 'Samoa'},
    {name: 'San Marino'},
    {name: 'Sao Tome & Principe'},
    {name: 'Saudi Arabia'},
    {name: 'Senegal'},
    {name: 'Serbia'},
    {name: 'Seychelles'},
    {name: 'Sierra Leone'},
    {name: 'Singapore'},
    {name: 'Slovakia'},
    {name: 'Solomon Islands'},
    {name: 'Somalia'},
    {name: 'South Africa'},
    {name: 'South Sudan'},
    {name: 'Spain'},
    {name: 'Sri Lanka'},
    {name: 'Sudan'},
    {name: 'Suriname'},
    {name: 'Swaziland'},
    {name: 'Sweden'},
    {name: 'Switzerland'},
    {name: 'Syria'},
    {name: 'Taiwan'},
    {name: 'Tajikistan'},
    {name: 'Tanzania'},
    {name: 'Thailand'},
    {name: 'Togo'},
    {name: 'Tonga'},
    {name: 'Trinidad & Tobago'},
    {name: 'Tunisia'},
    {name: 'Turkey'},
    {name: 'Turkmenistan'},
    {name: 'Tuvalu'},
    {name: 'Uganda'},
    {name: 'Ukraine'},
    {name: 'United Arab Emirates'},
    {name: 'United Kingdom'},
    {name: 'United States'},
    {name: 'Uruguay'},
    {name: 'Uzbekistan'},
    {name: 'Vanuatu'},
    {name: 'Vatican City'},
    {name: 'Venezuela'},
    {name: 'Vietnam'},
    {name: 'Yemen'},
    {name: 'Zambia'},
    {name: 'Zimbabwe'}
]

// Display contact form on GET.
exports.contact_input_get = function(req, res) {
    res.render('contact_form', { country_list: list_countries, title: "Contact Form" });
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
                    zip: req.body.zip,
                    country: req.body.country
                }
            }
        );

        if (!errors.isEmpty()) {
            res.render('contact_form', { guest: guest, country_list: list_countries, errors: errors.array()});
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
    res.render('contact_success', {title: "Thank you!"});
};

// Display all contact info.
exports.contact_list_get = function(req, res, next) {
    Guest.find({})
        .sort({family_name : 1})
        .exec(function (err, list_contacts) {
            if (err) { return next(err); }
            res.render('contact_list', { contact_list: list_contacts, title: "Admin" });
        });
};
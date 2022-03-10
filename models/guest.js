var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactSchema = new Schema(
    {
        phone: {type: String, maxLength: 15},
        email: {type: String, maxLength: 100}
    }
)

var MemberSchema = new Schema(
    {
        firstName: {type: String, required: true, maxLength: 100},
        lastName: {type: String, required: true, maxLength: 100},
        birthday: {type: Date},
        contactInfo: {type: ContactSchema}
    }
)

var AddressSchema = new Schema(
    {
        streetAddress: {type: String, required: true, maxLength: 100},
        aptSuite: {type: String, maxLength: 100},
        city: {type: String, required: true, maxLength: 100},
        state: {type: String, required: true, maxLength: 100},
        zip: {type: Number, required: true, minLength: 5, maxLength: 5},
        country: {type: String, required: true, maxLength: 100},
    }
);

var GuestSchema = new Schema(
    {
        family_name: {type: String, required: true, maxLength: 100},
        address: {type: AddressSchema, required: true},
        members: [{type: MemberSchema}]
    }
);

module.exports = mongoose.model('Guest', GuestSchema);
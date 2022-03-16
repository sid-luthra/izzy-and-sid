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
        firstName: {type: String, maxLength: 100},
        lastName: {type: String, maxLength: 100},
        birthday: {type: Date},
        contactInfo: {type: ContactSchema}
    }
)

var AddressSchema = new Schema(
    {
        streetAddress: {type: String, maxLength: 100},
        aptSuite: {type: String, maxLength: 100},
        city: {type: String, maxLength: 100},
        state: {type: String, maxLength: 100},
        zip: {type: Number, minLength: 5, maxLength: 5},
        country: {type: String},
    }
);

AddressSchema.virtual('fullAddress').get(function() {
    var addressString = this.streetAddress;
    if (this.aptSuite) {
        addressString += ", " + this.aptSuite;
    }
    addressString += ", " + this.city + ", " + this.state + " " + this.zip;
    return addressString; 
})

var GuestSchema = new Schema(
    {
        family_name: {type: String, maxLength: 100},
        address: {type: AddressSchema, required: false},
        members: [{type: MemberSchema}]
    }
);



module.exports = mongoose.model('Guest', GuestSchema);
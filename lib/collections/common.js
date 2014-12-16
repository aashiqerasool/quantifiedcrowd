// People = new Mongo.Collection("people");

// var Schemas = {};

// Schemas.People = new SimpleSchema({
  
// })

// Schema = {};

// Schema.UserProfile = new SimpleSchema({
//   firstName: {
//     type: String,
//     regEx: /^[a-zA-Z-]{2,25}$/,
//     optional: false
//   },
  
  
// });

Schema = {};

Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    streetAddress: {
        type: String,
//         regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    city: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    postCode: {
        type: String,
//         regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    dob: {
        type: Date,
        optional: true
    },
    height: {
        type: String,
        optional: true
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(Schema.User);

Weights = new Mongo.Collection("weights");

Weights.attachSchema(new SimpleSchema({
  userId: {
     type: String,
     label: "User ID",
     autoValue: function() {
            if (this.isInsert) {
              if (! this.isFromTrustedCode) {
                return this.userId;
              }
            } else {
              this.unset();
            }},
        autoform: { omit: true }
          },
  updatedAt: {
    type: Date,
    label: "Created On",
    autoValue: function() {
        if (!this.isSet) {
            return new Date();
        }
        else {
          this.unset();
        }},
    autoform: { omit: true }
  },
  weight: {
    type: Number,
    label: "New Weight",
    decimal: true,
    min:1,
  },
  comments: {
    type: String,
    label: "Comments",
    optional: true,
    max: 200
  }
}));

Weights.allow({
  insert: function(userId, doc)  {
    return true;
  }
//   ,
//   remove: function(userId, post){
//     return ownsDocument(userId, post);
//   }
});

Heights = new Mongo.Collection("heights");

Heights.attachSchema(new SimpleSchema({
  userId: {
     type: String,
     label: "User ID",
     autoValue: function() {
            if (this.isInsert) {
              if (! this.isFromTrustedCode) {
                return this.userId;
              }
            } else {
              this.unset();
            }},
        autoform: { omit: true }
          },
  updatedAt: {
    type: Date,
    label: "Created On",
    autoValue: function() {
        if (!this.isSet) {
            return new Date();
        }
        else {
          this.unset();
        }},
    autoform: { omit: true }
  },
  height: {
    type: Number,
    label: "New Height",
    decimal: true,
    min:1,
  },
  comments: {
    type: String,
    label: "Comments",
    optional: true,
    max: 200
  }
}));


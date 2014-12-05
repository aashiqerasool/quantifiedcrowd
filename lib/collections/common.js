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


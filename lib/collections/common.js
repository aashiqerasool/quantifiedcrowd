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

//medTrack schemas and collections
MedsSchema = new SimpleSchema({
  medName: {
    type: String,
    label:"Medicine Name",
    regEx: /^[a-zA-Z-]{2,25}$/,
//     autoform: {
//       type: "select2",
//       afFieldInput: {
//         multiple: false
//       },
//       options: function () {
//         var meds = Meds.find({}, {sort: {medName: 1}}).fetch();
//         var dataset = [];
//         var medsOnly = [];
    
//         meds.forEach(function(med) {
//           var item = {
//             label: med.medName,
//             value: med.medname,
//             _id: med._id
//       };
        
//        dataset.push(item);
//       });
//         return dataset;
// //           {label: "2013", value: 2013},
// //           {label: "2014", value: 2014},
// //           {label: "2015", value: 2015},
// //           {label: "test 1", value: "test1"}
//       }    
//     }
  },
  measureUnit: {
    type: String,
    label:"Measurement unit",
    regEx: /^[a-zA-Z-]{2,25}$/,
  },
  availableStrengths: {
    type: [Number],
    label: "Available Strengths",
    decimal: true,
    min:0,
//     autoform: {
//       type: "select2",
//       afFieldInput: {
//         multiple: false
//       },
//       options: function () {
//         var meds = Meds.find({}, {sort: {medName: 1}}).fetch();
//         var dataset = [];
//         var medsOnly = [];
    
//         meds.forEach(function(med) {
//           var item = {
//             label: med.availableStengths,
//             value: med.availableStengths,
//             _id: med._id
//       };
        
//        dataset.push(item);
//       });
//         return dataset;
// //           {label: "2013", value: 2013},
// //           {label: "2014", value: 2014},
// //           {label: "2015", value: 2015},
// //           {label: "test 1", value: "test1"}
//       }    
//     }
   },
  active: {
    type: Boolean,
    label:"Active?",
    regEx: /^[a-zA-Z-]{2,25}$/,
  }
});

Meds = new Mongo.Collection("meds");
Meds.attachSchema(MedsSchema);

MedDosesSchema = new SimpleSchema({
  morn: {
    type: Number,
    label: "Morn",
    decimal: true,
    min: 0,
    defaultValue: 0
  },
  mid: {
    type: Number,
    label: "Mid",
    decimal: true,
    min: 0,
    defaultValue: 0
  },
  eve: {
    type: Number,
    label: "Eve",
    decimal: true,
    min: 0,
    defaultValue: 0
  },
    night: {
    type: Number,
    label: "Night",
    decimal: true,
    min: 0,
    defaultValue: 0
  }
});

Schema.MedTrackDataSchema = new SimpleSchema({
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
  med: {
    type: String,
    label: "Medicine Name",
    //allowedValues: Meds.find(),
  },
  medStrength: {
    type: Number,
    label: "Strength"
    
  },
  medDoses: {
    type: MedDosesSchema,
    label: "Dosage"
  },
  medActive: {
    type: Boolean,
    label: "Active?"
  },
  medNotes: {
    type: String,
    label: "Notes"
  }
});

MedTrackData = new Mongo.Collection("medTrackData");
MedTrackData.attachSchema(Schema.MedTrackDataSchema);

// MedDoses = new Mongo.Collection("medDoses");
// MedDoses.attachSchema(MedDosesSchema);

// MedTrackData = new Mongo.Collection("medTrackData");
// MedTrackData.attachSchema(MedTrackDataSchema);

// Meds.insert({
//   medName: "Bisoprolol",
//   measureUnit: "mg",
//   availableStrengths: [1.25, 2.5, 3.75, 5, 7.5, 10],
//   active: true
// })


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
        optional: true,
      autoform: {
        type: "bootstrap-datepicker"
      },
    },
    height: {
        type: Number,
        decimal: true,
        optional: true
    },
    bmi: {
        type: Number,
        optional: true,
        decimal: true,
        autoform: { omit: true }
//         autoValue: function() {
//           return 32;
//           }
//     } 
    },
  bmiStatus: {
    type: String,
    optional: true,
    autoform: { omit: true },
//     autoValue: function() {
//       return this.field(bmi);
//     }
  }
//     medTrackData: {
//       type: [Schema.MedTrackDataSchema],
//       label: "Medicines",
//       optional: true
// }
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
// Meteor.users.profile.attachSchema(Schema.MedTrackDataSchema);

//Weights collection declaration
Weights = new Mongo.Collection("weights");

//Weights Schema Definition
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


//Blood Sugar collection declaration
BloodSugar = new Mongo.Collection("bloodsugar");

//BloodSugar Schema Definition
BloodSugar.attachSchema(new SimpleSchema({
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
  bloodsugar: {
    type: Number,
    label: "New Daily Blood Sugar Value",
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

BloodSugar.allow({
  insert: function(userId, doc)  {
    return true;
  }
//   ,
//   remove: function(userId, post){
//     return ownsDocument(userId, post);
//   }
});

//BloodPressure collection declaration
BloodPressure = new Mongo.Collection("bloodpressure");

BloodPressureSchema = new SimpleSchema({
  systolic: {
    type: Number,
    label: "Systolic",
    min: 1
  },
  diastolic: {
    type: Number,
    label: "Diastolic",
    min: 1
  }  
});

//BloodPressure Schema Definition
BloodPressure.attachSchema(new SimpleSchema({
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
  bloodpressure: {
    type: BloodPressureSchema,
    label: "New Daily Blood Pressure Value",
//     decimal: true,
//     minCount: 2,
//     maxCount: 2,
//     min:1,
  },
  comments: {
    type: String,
    label: "Comments",
    optional: true,
    max: 200
  }
}));

BloodPressure.allow({
  insert: function(userId, doc)  {
    return true;
  }
//   ,
//   remove: function(userId, post){
//     return ownsDocument(userId, post);
//   }
});

BmiStats = new Mongo.Collection("bmiStats");

//BMI collection declaration
Bmi = new Mongo.Collection("bmi");

//BMI Schema Definition
Bmi.attachSchema(new SimpleSchema({
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
  bmi: {
    type: Number,
    label: "New BMI Value",
    decimal: true,
    min:1,
    optional: true
  }
}));

Bmi.allow({
  insert: function(userId, doc)  {
    return true;
  }
//   ,
//   remove: function(userId, post){
//     return ownsDocument(userId, post);
//   }
});


// Heights = new Mongo.Collection("heights");

// Heights.attachSchema(new SimpleSchema({
//   userId: {
//      type: String,
//      label: "User ID",
//      autoValue: function() {
//             if (this.isInsert) {
//               if (! this.isFromTrustedCode) {
//                 return this.userId;
//               }
//             } else {
//               this.unset();
//             }},
//         autoform: { omit: true }
//           },
//   updatedAt: {
//     type: Date,
//     label: "Created On",
//     autoValue: function() {
//         if (!this.isSet) {
//             return new Date();
//         }
//         else {
//           this.unset();
//         }},
//     autoform: { omit: true }
//   },
//   height: {
//     type: Number,
//     label: "New Height",
//     decimal: true,
//     min:1,
//   },
//   comments: {
//     type: String,
//     label: "Comments",
//     optional: true,
//     max: 200
//   }
// }));


HealthCalDataSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Event Title",
  },
 start: {
    type: Date,
    autoform: {
      afFieldInput: {
        type: "datetime-local",
//         time: 'true',
//         format: 'DD-MM-YYYY HH:mm'
      }
    }
  },
  end: {
    type: Date,
    autoform: {
      afFieldInput: {
        type: "datetime-local",
//         time: 'true',
//         format: 'DD-MM-YYYY HH:mm'
      }
    }
  },
  tags: {
    type: [String],
    label: "Tags - Descriptive tags such as \"appointment\" or \"blood test\"",
    autoform: {
      type: 'tags',
      afFieldInput: '# bootstrap-tagsinput options'
    }
  }
});

HealthCalData = new Meteor.Collection('healthCalData');

HealthCalData.attachSchema(HealthCalDataSchema);

// HealthCalData.allow({
//   insert: function(userId, doc)  {
//     return true;
//   }
// //   ,
// //   remove: function(userId, post){
// //     return ownsDocument(userId, post);
// //   }
// });
Template.addMed.helpers({
  users: function () {
    return Meteor.users;
  },
  user: function() {
    return Meteor.user();
  },
  meds: function() {
    return Meteor.meds.find();
  },
  userMeds: function() {
    return Meteor.user().profile.medTrackData;
  },
  medTrackDataSchema: function () {
    return Schema.MedTrackDataSchema;
  },
  strengths: function () {
    var strengthsDataset = [];
//     var strengths = Meds.find({_id: Session.get("selectedMed")}, { availableStrengths: 1,});
    var strengths = Session.get("medStrengths");
//    strengths.forEach()
    //Session.set("availableStrengths", strengths)
    console.log(strengths);
    strengths.forEach(function(strength) {
      var item = {
        strength: strength
      };
      
//       var item2 = {
//         "weight": weight.weight
//       };
   
      strengthsDataset.push(item);
    });
    return strengthsDataset;
  },
  medSettings: function () {
    return {
      position: "top",
      limit: 5,
      rules: [
     {
       collection: Meds,
       field: "medName",
       template: Template.medDetails
     }
   ]
  }
},
    doseSettings: function () {
    return {
      position: "top",
      limit: 5,
      rules: [
     {
       collection: Meds,
       field: "medName",
       template: Template.medDetails
     }
   ]
  }
},
  medsDataSource: function () {
//   return Meds.find().fetch().map(function(item){
//     return item.medName;
  
    return Meds.find({_id: Session.get("selectedMed")}).fetch();
  }
});



Template.addMed.events({
  'click #medSelectBtn': function () {
    
    console.log("Form submitted");
    var selectedMeds = $("#medChoice");
    console.log(selectedMeds);
    console.log(Session.get("availableStrengths"));
  },
  'change #strengthSelect': function(event, template) {
    Session.set("selectedStrength",$(event.target).val());
    console.log(Session.get("selectedStrength"));
  }
//   'keypress #medChoice': function (evt, template) {
//     if (evt.which === 13) {
//       var url = template.find(".newLink").value;
//       // add to database
//     }
//   }
});



// AutoForm.addHooks(null, {
//     onSuccess: function () {
//       Router.go('/meds');
//     }
//   });
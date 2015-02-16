Meteor.subscribe("medsData");

Template.addMed.helpers({
  pageName: function () {
    return "Add Med"
  },
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
    //Session.set("medStrengths", "");
    
    var strengthsDataset = [];
//     var strengths = Meds.find({_id: Session.get("selectedMed")}, { availableStrengths: 1,});
    var strengths = [];
    strengths = Session.get("medStrengths");
//    strengths.forEach()
    //Session.set("availableStrengths", strengths)
    //console.log(strengths);
    strengths.forEach(function(strength) {
      var item = {
        strength: strength
      };
      strengthsDataset.push(item);
    });
    return strengthsDataset;
  },
  measureUnit: function () {
    return Session.get("measureUnit");
  },
  medSettings: function () {
    return {
      position: "bottom",
      limit: 5,
      rules: [
     {
       collection: Meds,
       field: "medName",
       template: Template.medSelectList
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
       template: Template.medSelectList
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
   Session.set("medStrengths"); 
    //console.log("Form submitted");
    var selectedMeds = $("#medChoice");
    //console.log(selectedMeds);
    //console.log(Session.get("availableStrengths"));
  },
  'change #strengthSelect': function(event, template) {
    Session.set("selectedStrength",$(event.target).val());
    console.log(Session.get("selectedStrength"));
  },
   'click #medSelectList-medName': function(event, med){
    console.log("medDetails "+this.availableStrengths);
    Session.set("selectedMedId", this._id);
    Session.set("selectedMedName", this.medName);
    console.log(Session.get("selectedMedName"));
    Session.set("medStrengths", this.availableStrengths);
    Session.set("measureUnit", this.measureUnit);
    console.log(Session.get("selectedMedId"));
    console.log(Session.get("medStrengths"));    
  }
});



// AutoForm.addHooks(null, {
//     onSuccess: function () {
//       Router.go('/meds');
//     }
//   });
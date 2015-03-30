// Handlebars.registerHelper("prettifyDate", function(timestamp) {
//     return moment(new Date(timestamp)).fromNow();
// });

Meteor.subscribe("userWeightData");
Meteor.subscribe("userBmiData");

Handlebars.registerHelper("prettifyDate", function(timestamp) {
     var date = new Date(timestamp);
     return date.toString("dd-MM-yyyy");
});

Template.profile.helpers({
    pageName: function () {
    return "Profile"
  },
  firstName: function() {
    return Meteor.user().profile.firstName;
  },
  lastName: function() {
    return Meteor.user().profile.lastName;
  },
  gender: function() {
//     if(!Meteor.user().profile.gender){
//       return "<a href=\"/updateProfile\">Update gender</a>";
//     }
    return Meteor.user().profile.gender;
  },
  age: function() {
    var dob = new Date(Meteor.user().profile.dob);
    var dobFormatted = dob.toString("dd-MM-yyyy");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var dobYear = dob.getFullYear();
    var dobMonth = dob.getMonth();
    var ageYear = currentYear - dobYear;
    var ageMonth = currentMonth - dobMonth;
    
    if (currentMonth <= dobMonth || currentMonth == dobMonth && currentDate.getDate() < dob.getDate()) {
      ageYear--;
    }
    
    if (ageMonth < 0) {
      ageMonth = Math.abs(ageMonth);
    }
    var ageFull = ageYear + " years " + ageMonth + " months";
    return ageFull;
  },
  latestWeight: function() {
    var latestWeight = Weights.findOne({userId: Meteor.userId()}, {sort: {updatedAt: -1}}).weight;
    return latestWeight;
  },
    height: function() {
    return Meteor.user().profile.height;
  },
  showBmi: function() {
    var latestBmi = Bmi.findOne({userId: Meteor.userId()}, {sort: {updatedAt: -1}}).bmi;
//     var latestWeight = Weights.findOne({userId:   Meteor.userId()}, {sort: {updatedAt: -1}}).weight;
//     var height = Meteor.user().profile.height;
//     var heightSq = height^2
//     var bmi = latestWeight/heightSq;
//     console.log(latestBmi);
    Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.bmi': latestBmi.toFixed(2)}});
    return latestBmi.toFixed(2);
  },
  newBmi: function() {
//     console.log(Meteor.user().profile.bmiStatus);
    return Meteor.user().profile.bmi.toFixed(2);
  },
  bmiStatus: function() {
    var currentBmi = Bmi.findOne({userId: Meteor.userId()}, {sort: {updatedAt: -1}}).bmi;
    var currentBmiStatus;
     if (currentBmi < 18.5 ){
      currentBmiStatus = "Underweight";

    }
    else
      if (currentBmi >= 18.5 && currentBmi <= 24.9 ){
      currentBmiStatus = "Healthy";
    }
    if (currentBmi >= 25 && currentBmi < 30 ){
      currentBmiStatus = "Overweight";
    }
    else
      if (currentBmi >= 30 ) {
      currentBmiStatus = "Obese";
      }
    Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.bmiStatus': currentBmiStatus}});
    return currentBmiStatus;
  }
});


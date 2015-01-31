// Handlebars.registerHelper("prettifyDate", function(timestamp) {
//     return moment(new Date(timestamp)).fromNow();
// });

Handlebars.registerHelper("prettifyDate", function(timestamp) {
     var date = new Date(timestamp);
     return date.toString("dd-MM-yyyy");
});

Template.profile.helpers({
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
  var latestWeight = Weights.findOne({userId:   Meteor.userId()}, {sort: {updatedAt: -1}}).weight;
    var height = Meteor.user().profile.height;
    var heightSq = height^2
    var bmi = latestWeight/heightSq;
    return bmi.toFixed(2);
  }
});
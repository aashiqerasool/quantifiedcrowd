Template.profile.helpers({
  firstName: function() {
    return Meteor.user().profile.firstName;
  },
  lastName: function() {
    return Meteor.user().profile.lastName;
  },
  showBmi: function() {
    var weight = Meteor.user().profile.startweight;
    var height = Meteor.user().profile.startheight;
    var heightSq = height^2
    var bmi = weight/heightSq;
    return bmi.toFixed(2);
  }
});
Template.profile.helpers({
  firstName: function() {
    return Meteor.user().profile.firstName;
  },
  lastName: function() {
    return Meteor.user().profile.lastName;
  },
  latestWeight: function() {
    var latestWeight = Weights.findOne({userId: Meteor.userId()}, {sort: {updatedAt: -1}}).weight;
    return latestWeight;
  },
    latestHeight: function() {
    return Meteor.user().profile.startheight;
  },
  showBmi: function() {
  var latestWeight = Weights.findOne({userId:   Meteor.userId()}, {sort: {updatedAt: -1}}).weight;
    var height = Meteor.user().profile.startheight;
    var heightSq = height^2
    var bmi = latestWeight/heightSq;
    return bmi.toFixed(2);
  }
});
Meteor.methods({
  'saveCalEvt': function(cEvt) {
    HealthCalData.insert(cEvt);
  }
})
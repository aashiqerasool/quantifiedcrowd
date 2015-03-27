Meteor.methods({
  'saveCalEvt': function(cEvt) {
    HealthCalData.insert(cEvt);
  },
  'updateTitle':function(id,title){
        return HealthCalData.update({_id:id},{$set:{title:title}});
      },
})
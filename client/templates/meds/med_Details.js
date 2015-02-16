Template.addMed.helpers({
  med: function() {
    return Meds.find().fetch();
  }
});



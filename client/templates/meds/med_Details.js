Template.addMed.helpers({
  med: function() {
    return Meds.find().fetch();
  }
});


Template.addMed.events({
  'click p': function(event, med){
    console.log("medDetails "+this.availableStrengths);
    Session.set("selectedMed", this._id);
    Session.set("medStrengths", this.availableStrengths);
    console.log(Session.get("selectedMed"));
    console.log(Session.get("medStrengths"));    
  }
});
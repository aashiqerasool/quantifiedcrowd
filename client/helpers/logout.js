Template.logOut.events({
  'click #log-out': function(e,t){
    Meteor.logout(function(){
    Session.set('alert',"Logged out successfully");
  });
    return false;
  }
});
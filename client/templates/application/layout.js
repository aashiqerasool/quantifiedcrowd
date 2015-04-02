 Template.layout.events( Velociratchet.events );
Template.layout.helpers( Velociratchet.helpers );

Deps.autorun(function(){
  if(Meteor.userId()){
    Router.go('/profile');
  }
});
//Kashif N Ahmed 2014

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  //notFoundTemplate: 'notFound',
//   waitOn: function() {
//      return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
//   }
});

// Router.route('/', {name: 'firstPage'});
//standard app routes are defined below

//main (index) route
Router.route('/', {name: 'index'});

//profile route
Router.route('profile', {name: 'profile'});

//update profile route
Router.route('updateProfile', {name: 'updateProfile'});

//metrics route
Router.route('metrics', {name: 'metrics'});

//updateWeight route
Router.route('updateWeight', {name: 'updateWeight'});

//updateBp route
Router.route('updateBp', {name: 'updateBp'});

//updateBloodSugar route
Router.route('updateBloodsugar', {name: 'updateBloodsugar'});

//settings route
Router.route('settings', {name: 'settings'});

//following defines which routes require a user to be logged in before they can be accessed. This uses the AccountsTemplates smart package's ensureSignedIn method with the only condition.
// Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
//     only: ['settings', 'profile', 'metrics', 'updateWeight', 'updateBp', 'updateBloodsugar']
// });
Router.onBeforeAction(function() {AccountsEntry.signInRequired(this)}, {
     only: ['settings', 'profile', 'metrics', 'updateWeight', 'updateBp', 'updateBloodsugar']
});
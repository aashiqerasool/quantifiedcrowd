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

//meds route
Router.route('meds', {name: 'meds'});

//healthcal route
//meds route
Router.route('healthCal', {name: 'healthCal'});

//updateWeight route
Router.route('updateWeight', {name: 'updateWeight'});

//updateBp route
Router.route('updateBp', {name: 'updateBp'});

//updateBloodSugar route
Router.route('updateBloodsugar', {name: 'updateBloodsugar'});

//weightHistory route
Router.route('weightHistory', {name: 'weightHistory'});

//weightGraph route
Router.route('weightGraph', {name: 'weightGraph'});


//addMeds route
Router.route('/medTrack/addMed', {name: 'addMed'});

//settings route
Router.route('settings', {name: 'settings'});

//following defines which routes require a user to be logged in before they can be accessed. This uses the AccountsTemplates smart package's ensureSignedIn method with the only condition provided by iron router.
// Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
//     only: ['settings', 'profile', 'metrics', 'updateWeight', 'updateBp', 'updateBloodsugar']
// });
Router.onBeforeAction(function() {AccountsEntry.signInRequired(this)}, {
     only: ['settings', 'profile', 'metrics', 'updateWeight', 'updateBp', 'updateBloodsugar', 'meds','addMed']
});
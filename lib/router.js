Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  //notFoundTemplate: 'notFound',
//   waitOn: function() {
//      return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
//   }
});

// Router.route('/', {name: 'firstPage'});
Router.route('/', {name: 'firstPage'});

Router.route('profile', {name: 'profile'});

Router.route('metrics', {name: 'metrics'});

Router.route('updateWeight', {name: 'updateWeight'});

Router.route('updateBp', {name: 'updateBp'});

Router.route('settings', {name: 'settings'});

Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    only: ['settings']
});

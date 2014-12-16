Template.updateProfile.helpers({
  users: function () {
    return Meteor.users;
  },
  user: function() {
    return Meteor.user();
  },
  userSchema: function () {
    return Schema.User;
  }
});

AutoForm.addHooks(null, {
    onSuccess: function () {
      Router.go('/profile');
    }
  });
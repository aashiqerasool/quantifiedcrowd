Template.updateProfile.helpers({
    pageName: function () {
    return "Update Profile";
  },
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

AutoForm.addHooks(['updateWeight', 'updateActivity', 'updateBloodPressure', 'updateBloodSugar', 'updateProfileForm'], {
    onSuccess: function () {
      Router.go('/profile');
    }
  });
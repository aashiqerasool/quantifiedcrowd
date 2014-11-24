// Template.login.events({
//   'submit #login-form' : function(e, t){
//     e.preventDefault();
    
//     //get input field values
    
//     var email = t.find('#login-email').value,
//         password = t.find('login-pwd').value;
    
//     Meteor.loginWithPassword(email, password, function(err){})
//   }
// });

Template.logIn.events({
  'submit #login-form': function(e,t){
    e.preventDefault();
    
    var logInForm = $(e.currentTarget),
        email = trimInput(logInForm.find('#login-email').val().toLowerCase()),
        password = logInForm.find('#login-pwd').val();
    
    if (isNotEmpty(email) && isEmail(email) && isNotEmpty(password) && isValidPassword(password)) {
      Meteor.loginWithPassword(email,password, function(err) {
        if(err) {
          Session.set('alert', 'Sorry, but those details seem to be incorrect');
        } else {
          Session.set('alert', 'Welcome back');
        }
      });
    }
    return false;
  },
  'click #showForgotPassword': function(e, t) {
        Session.set('showForgotPassword', true);
        return false;
    },
});
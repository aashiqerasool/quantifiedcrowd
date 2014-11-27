Template.forgotPassword.events({
    'submit #forgotPwdForm': function(e, t) {
        e.preventDefault();

        var forgotPasswordForm = $(e.currentTarget),
            email = trimInput(forgotPasswordForm.find('#forgotPwdEmail').val().toLowerCase());

        if (isNotEmpty(email) && isEmail(email)) {
            Accounts.forgotPassword({email: email}, function(err) {
                if (err) {
                    if (err.message === 'User not found [403]') {
                        Session.set('alert', 'This email address doesn\'t seem to exist.');
                    } else {
                        Session.set('alert', 'Sorry but something went wrong.');
                    }
                } else {
                    Session.set('alert', 'Email Sent. Please check your inbox to reset your password.');
                }
            });
        }
        return false;
    },

    'click #returnToLogin': function(e, t) {
        Session.set('showForgotPassword', null);
        return false;
    },
});
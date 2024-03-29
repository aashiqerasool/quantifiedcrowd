Template.signUp.events({
    'submit #signup-form': function(e, t) {
        e.preventDefault();

        var signUpForm = $(e.currentTarget),
            email = trimInput(signUpForm.find('#signup-email').val().toLowerCase()),
            password = signUpForm.find('#signup-pwd').val(),
            passwordConfirm = signUpForm.find('#signup-pwd-confirm').val();

        if (isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, passwordConfirm)) {
            Accounts.createUser({email: email, password: password}, function(err) {
                if (err) {
                    if (err.message === 'Email already exists. [403]') {
                        Session.set('alert', 'We\'re sorry but this email is already used.');
                    } else {
                        Session.set('alert', 'We\'re sorry but something went wrong.');
                    }
                } else {
                    Session.set('alert', 'Congrats! You\'re signed up!');
                }
            });
        }
        return false;
    },
});
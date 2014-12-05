//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
// AccountsTemplates.configureRoute('signIn');
// AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');



// Options
AccountsTemplates.configure({
    //defaultLayout: 'emptyLayout',
    showForgotPasswordLink: true,
    overrideLoginErrors: false,
    enablePasswordChange: true,
    sendVerificationEmail: false,

    //enforceEmailVerification: true,
    //confirmPassword: true,
    continuousValidation: true,
    //displayFormLabels: true,
    //forbidClientAccountCreation: false,
    //formValidationFeedback: true,
    homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,
    
    showValidating: true,
    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:true,
    texts: {
        navSignIn: "signIn",
        navSignOut: "signOut",
        optionalField: "optional",
        pwdLink_pre: "",
        pwdLink_link: "forgotPassword",
        pwdLink_suff: "",
        sep: "OR",
        signInLink_pre: "ifYouAlreadyHaveAnAccount",
        signInLink_link: "signin",
        signInLink_suff: "",
        signUpLink_pre: "dontHaveAnAccount",
        signUpLink_link: "signUp",
        signUpLink_suff: "",
        socialAdd: "add",
        socialConfigure: "configure",
        socialIcons: {
            "meteor-developer": "fa fa-rocket",
        },
        socialRemove: "remove",
        socialSignIn: "signIn",
        socialSignUp: "signUp",
        socialWith: "with",
        termsPreamble: "clickAgree",
        termsPrivacy: "privacyPolicy",
        termsAnd: "and",
        termsTerms: "terms",
        
    }
});

AccountsTemplates.addField({
    _id: 'firstName',
    type: 'text',
    displayName: "First Name",
    required: true,
    placeholder: "First Name",
    func: function(value){return value === 'Full Name';},
    errStr: 'Only "Full Name" allowed!',
});

AccountsTemplates.addField({
    _id: 'lastName',
    type: 'text',
    displayName: "Last Name",
    required: true,
    placeholder: "Last Name",
    func: function(value){return value === 'Full Name';},
    errStr: 'Only "Full Name" allowed!',
});

AccountsTemplates.addField({
    _id: 'streetAddress',
    type: 'text',
    displayName: "Street Address",
    required: true,
    placeholder: "Street Address",
});

AccountsTemplates.addField({
    _id: 'city',
    type: 'text',
    displayName: "City",
    required: true,
    placeholder: "City",
});

AccountsTemplates.addField({
    _id: 'county',
    type: 'text',
    displayName: "County",
    required: true,
    placeholder: "County",
});

AccountsTemplates.addField({
    _id: 'postCode',
    type: 'text',
    displayName: "Post Code",
    required: true,
    placeholder: "Post Code",
});

AccountsTemplates.addField({
    _id: "gender",
    type: "select",
    displayName: "Gender",
  required: true,
    select: [
        {
            text: "Male",
            value: "male",
        },
        {
            text: "Female",
            value: "female",
        },
    ],
});

AccountsTemplates.addField({
    _id: 'dob',
    type: 'text',
    displayName: "Date of Birth",
    required: true,
      re: /(^(((0[1-9]|[12][0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/,
      errStr: "Date of Birth must be in DD/MM/YYYY format",
    placeholder: "Date of Birth in DD/MM/YYYY",
});   
      
      
      
AccountsTemplates.addField({
    _id: 'startweight',
    type: 'text',
    displayName: "Weight",
    required: true,
    placeholder: "Weight in Kilograms",
});      
      
AccountsTemplates.addField({
    _id: 'startheight',
    type: 'text',
    displayName: "Height",
    required: true,
    placeholder: "Height in Metres",
});           
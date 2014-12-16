Meteor.startup(function () {
    AccountsEntry.config({
      //logo: 'logo.png',                  // if set displays logo above sign-in options
      //privacyUrl: '/privacy-policy',     // if set adds link to privacy policy and 'you agree to ...' on sign-up page
      //termsUrl: '/terms-of-use',         // if set adds link to terms  'you agree to ...' on sign-up page
      homeRoute: '/',                    // mandatory - path to redirect to after sign-out
      dashboardRoute: '/profile',      // mandatory - path to redirect to after successful sign-in
      profileRoute: 'profile',
      passwordSignupFields: 'USERNAME_AND_EMAIL',
      showSignupCode: false,
      showOtherLoginServices: true,      // Set to false to hide oauth login buttons on the signin/signup pages. Useful if you are using something like accounts-meld or want to oauth for api access
      extraSignUpFields: [{             // Add extra signup fields on the signup page
        field: "firstName",                           // The database property you want to store the data in
        name: "",  // An initial value for the field, if you want one
        label: "First Name",                      // The html lable for the field
        placeholder: "First Name",                 // A placeholder for the field
        type: "text",                            // The type of field you want
        required: true                           // Adds html 5 required property if true
       },
                         {             // Add extra signup fields on the signup page
        field: "lastName",                           // The database property you want to store the data in
        name: "",  // An initial value for the field, if you want one
        label: "Last Name",                      // The html lable for the field
        placeholder: "Last Name",                 // A placeholder for the field
        type: "text",                            // The type of field you want
        required: true                           // Adds html 5 required property if true
       },
                         {             // Add extra signup fields on the signup page
        field: "streetAddress",                           // The database property you want to store the data in
        name: "",  // An initial value for the field, if you want one
        label: "Street Address",                      // The html lable for the field
        placeholder: "Street Address",                 // A placeholder for the field
        type: "text",                            // The type of field you want
        required: true                           // Adds html 5 required property if true
       },
                         {             // Add extra signup fields on the signup page
        field: "city",                           // The database property you want to store the data in
        name: "",  // An initial value for the field, if you want one
        label: "City",                      // The html lable for the field
        placeholder: "City",                 // A placeholder for the field
        type: "text",                            // The type of field you want
        required: true                           // Adds html 5 required property if true
       },
                         {             // Add extra signup fields on the signup page
        field: "postCode",                           // The database property you want to store the data in
        name: "",  // An initial value for the field, if you want one
        label: "Post Code",                      // The html lable for the field
        placeholder: "Post Code",                 // A placeholder for the field
        type: "text",                            // The type of field you want
        required: true                           // Adds html 5 required property if true
       },
                         {             // Add extra signup fields on the signup page
        field: "dob",                           // The database property you want to store the data in
        name: "",  // An initial value for the field, if you want one
        label: "Date of Birth",                      // The html lable for the field
//         placeholder: "First Name",                 // A placeholder for the field
        type: "date",                            // The type of field you want
        required: true                           // Adds html 5 required property if true
       },
                                                   {             // Add extra signup fields on the signup page
        field: "height",                           // The database property you want to store the data in
        name: "",  // An initial value for the field, if you want one
        label: "Height (in Metres)",                      // The html lable for the field
        placeholder: "Height in metres",                 // A placeholder for the field
        type: "text",                            // The type of field you want
        required: true                           // Adds html 5 required property if true
       }]
    });
//   AccountsEntry.config({
//     passwordSignupFields: 'EMAIL_ONLY'
//   });
  });
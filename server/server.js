Meteor.startup(function(){
//   process.env.MAIL_URL="smtp://saifallah786:misbah786@smtp.gmail.com:465";
  process.env.MAIL_URL = 'smtp://postmaster%40sandbox6c4d2bc3fa6a44689ee99c8650baef67.mailgun.org:9d1687139bfc07ce32ca64ecb0952202@smtp.mailgun.org:587';
});

// Email.send({
//   from: "saifallah786@gmail.com",
//   to: "saifallah786@gmail.com",
//   subject: "Meteor Can Send Emails via Gmail",
//   text: "Its pretty easy to send emails via gmail."
// });
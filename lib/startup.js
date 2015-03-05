Meteor.startup(function () {
    // code to run on server at startup
    SyncedCron.start();
    
    // Stop jobs after 15 seconds
    Meteor.setTimeout(function() { SyncedCron.stop(); }, 15 * 1000);
  });
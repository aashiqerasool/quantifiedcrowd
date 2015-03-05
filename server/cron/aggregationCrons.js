//Derived and adapted from https://github.com/percolatestudio/meteor-synced-cron
SyncedCron.add({
  name: 'bmi daily aggregation test',
  schedule: function(parser) {
    //parser is a later.parse object
    return parser.text('every 5 seconds');
  },
  job: function() {

    var overallAvgBmis;
    Meteor.call('overallAvgBmiDaily', function(error, result) {
      overallAvgBmis = result;
//       Session.set("overallAvgBmis", result);
      return;
    });
//     return console.log("Beep from bmi daily aggregation job using SyncedCron");
    return OaAvgBmiDaily.insert({avgBmi:overallAvgBmis.avgBmi});
  }
});

// SyncedCron.start();
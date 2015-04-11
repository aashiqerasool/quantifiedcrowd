//Derived and adapted from https://github.com/percolatestudio/meteor-synced-cron
SyncedCron.add({
  name: 'bmi daily aggregation',
  schedule: function(parser) {
    //parser is a later.parse object
    return parser.text('at 12:01am');
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
SyncedCron.add({
  name: 'weight daily aggregation',
  schedule: function(parser) {
    //parser is a later.parse object
    return parser.text('at 12:16am');
  },
  job: function() {

    var overallAvgWeights;
    Meteor.call('overallAvgWeightDaily', function(error, result) {
      overallAvgWeights = result;
//       Session.set("overallAvgBmis", result);
      return;
    });
//     return console.log("Beep from bmi daily aggregation job using SyncedCron");
    return OaAvgWeightDaily.insert({avgWeight:overallAvgWeights.avgWeight});
  }
});
SyncedCron.add({
  name: 'activity daily aggregation',
  schedule: function(parser) {
    //parser is a later.parse object
    return parser.text('at 12:31am');
  },
  job: function() {

    var overallAvgActivities;
    Meteor.call('overallAvgActivityDaily', function(error, result) {
      overallAvgActivity = result;
//       Session.set("overallAvgBmis", result);
      return;
    });
//     return console.log("Beep from bmi daily aggregation job using SyncedCron");
    return OaAvgActivityDaily.insert({avgActivity:overallAvgActivity.avgActivity});
  }
});

// SyncedCron.start();
Meteor.publish(null, function() {
 if (this.userId) {
   return Meteor.users.find(
     {_id: this.userId},
     {fields: {profile: 1, username: 1, emails: 1}});
 } else {
   return null;
 }
}, /*suppress autopublish warning*/{is_auto: false});

Meteor.publish("weightsRemote", function() {
  return Weights.find();
});

Meteor.publish("bmiData", function() {
  return Meteor.users.find({}, {fields: {'bmi': 1}});
});

Meteor.publish("medsData", function() {
  return Meds.find();
});

Meteor.publish("healthCalDataPub", function() {
  return HealthCalData.find({owner: this.userId});
});

Meteor.publish("userWeightData", function() {
  return Weights.find({userId: this.userId});
});

Meteor.publish("userBmiData", function() {
  return Bmi.find({userId: this.userId});
});

Meteor.publish("userBpData", function() {
  return BloodPressure.find({userId: this.userId});
});

Meteor.publish("userBloodSugarData", function() {
  return BloodSugar.find({userId: this.userId});
});

Meteor.publish("userActivityData", function() {
  return Activities.find({userId: this.userId});
});

Meteor.publish('oaAvgBmiHistoryPub',function(){
//     var lastSevenDays = new Date(Date.now() - 1000 * 3600 * 24 * 4); //https://bulletproofmeteor.com/database-modeling/aggregation-pipeline
//     var oaABmiLastSevenDays = OaAvgBmiDaily.find({updatedAt: {$gt: lastSevenDays}}); //https://bulletproofmeteor.com/database-modeling/aggregation-pipeline
//   var oaABmiLastSevenDays = OaAvgBmiDaily.find().fetch();
//     console.log(oaABmiLastSevenDays);
//     return oaABmiLastSevenDays;
  console.log(OaAvgBmiDaily.find());
  return OaAvgBmiDaily.find();
//     return OaAvgBmiDaily.find().fetch();
  });


// Meteor.publish('bmiStats', function() {
//   self = this;
//   var users = Meteor.users;
//   var pipeline = [{$group: {_id: {bmiStatus: "$profile.bmiStatus"}}}, {$out: "bmiStats"}];
//   bmiAggr = users.aggregate(pipeline);
//   return bmiAggr;
// //   _(bmiAggr).each(function(bmiStat) {
// //     if (bmiStat.bmiStatus) {
// //       self.added('bmiStatistics', Random.id(), {bmiStatus: bmiStat.bmiStatus});
// //     }
// //   });
// });

// Meteor.methods({
//   bmiStatistics: function() {
//     self = this;
//     var users = Meteor.users;
//     var pipeline = [{$group: {_id: {bmiStatus: "$profile.bmiStatus"}}}, {$out: "bmiStats"}];
//     bmiAggr = users.aggregate(pipeline);
//     return bmiAggr;    
//   }
// });

// http://stackoverflow.com/questions/18520567/average-aggregation-queries-in-meteor/18884223#18884223
Meteor.publish("directBmiStatsAggr", function (args) {
    var sub = this;
    // This works for Meteor 0.6.5
    var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;

    // Your arguments to Mongo's aggregation. Make these however you want.
    var pipeline = [{$group: {_id: {bmiStatus: "$profile.bmiStatus"}}}, {$out: "bmiStats"}];

    db.collection("Meteor.users").aggregate(        
        pipeline,
        // Need to wrap the callback so it gets called in a Fiber.
        Meteor.bindEnvironment(
            function(err, result) {
                // Add each of the results to the subscription.
                _.each(result, function(e) {
                    // Generate a random disposable id for aggregated documents
                    sub.added("bmiStats", Random.id(), {
                        key: e._id.bmiStatus,                        
                        count: e.count
                    });
                });
                sub.ready();
            },
            function(error) {
                Meteor._debug( "Error doing aggregation: " + error);
            }
        )
    );
});


// Meteor.publish('weightsAverage', function() {
//   self = this;
//   weightsAvg = Weights.aggregate(
//     [
//       {
//         $group: 
//         {
//           _id: null,
//         avgWeight: { $avg: "$weight"}
//         }
//       },
//       {$project: {avWeight: "$_id.avgWeight"}
//       }
//     ]
//   );
//   console.log(weightsAvg);
//   return weightsAvg;
// });



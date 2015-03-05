Meteor.methods({
  
  userBmi: function() {
//     var bmi = function() {
//        return Weights.find();
//     }
    return Meteor.users.find({}, {'profile.bmi': 1}).fetch();
  },
  //aggregation functions - overall userbase
  //--BMI Aggregation functions for overall userbase
  latestUserBmis: function() {
//     var bmis = Meteor.users;
//    var pipeline = [{$group: {_id: "$bmi", usersinBmi : { $sum: 1 }}}];
//         var pipeline = [{$group: {_id: "$weight", weights : { $sum: 1 }}}];
    
    var pipeline = [
      { $sort: {userId: 1, updatedAt: 1, bmi: 1}}, 
      { $group: {
        _id: "$userId",
        lastUpdate: { 
          $last: "$updatedAt"},
          bmi: {
            $last: "$bmi"}

      }
      }
    ];
    var result = Bmi.aggregate(pipeline);
//     var resultmr = Bmi.mapReduce(map1, reduce1,{ out: "mapreducetest"});
    console.log(result);
    return result;
//     var pipeline2 = [
//       { $sort: {userId: 1, updatedAt: 1, bmi: 1}},
//       { $group: {
//         _id: {
//           "userId": "$userId",
//           "bmi":    "$bmi"
//         },
//         lastUpdate: { 
//           $last: "$updatedAt"}
//       }
//       }
//     ];
//     var pipeline2 = [
//       { $group: {
//         _id: {
//           "userId": "$userId",
//           "bmi":    "$bmi"
//         },
//         "bmiCount": { "$sum": 1 }
//       }},
//       { "$group": {
//         "_id": "$_id.userId",
//         "bmis": {
//           "$push": {
//             "bmi": "$_id.bmi",
//             "count": "$bmiCount"
//         },
//       },
//        "count": { "$sum": "$bmiCount" }
//       }},
//       { "$sort": { "count": -1}},
//     ];
//     var map1 = function () {
//       emit(this.userId, this.bmi);
//     };
//     var reduce1 = function (keyUserId, valuesBmis) {
//       return valuesBmis;
//     };
  },
  overallAvgBmi: function() {
    var pipeline = [
      { $sort: {userId: 1, updatedAt: 1, bmi: 1}}, 
      { $group: {
        _id: "$userId",
        lastUpdate: { 
          $last: "$updatedAt"},
          bmi: {
            $last: "$bmi"}

      }
      },
      {
        $group:
          {
            _id: null,
//             total: {"$sum": 1},
            avgBmi: { $avg: "$bmi"}
          }
      }
    ];
    var result = Bmi.aggregate(pipeline);
    console.log(result);
    return result[0];

  },
  overallAvgBmiDaily: function() {
    var pipeline = [
      { $sort: {userId: 1, updatedAt: 1, bmi: 1}}, 
      { $group: {
        _id: "$userId",
        lastUpdate: { 
          $last: "$updatedAt"},
          bmi: {
            $last: "$bmi"}

      }
      },
      {
        $group:
          {
            _id: null,
//             total: {"$sum": 1},
            avgBmi: { $avg: "$bmi"}
          }
      },
//       {
//         $out:
//           "bmiOverallAvgDaily"
//       }
    ];
    var result = Bmi.aggregate(pipeline);
      
    console.log(result[0]);
    return result[0];

  },
  latestUserBmisByPCode: function(postCode) {
//     var bmis = Meteor.users;
//    var pipeline = [{$group: {_id: "$bmi", usersinBmi : { $sum: 1 }}}];
//         var pipeline = [{$group: {_id: "$weight", weights : { $sum: 1 }}}];
    var search = new RegExp(postCode, 'i');  //http://stackoverflow.com/questions/22180545/meteor-issues-with-regex-in-mongodb
    var searchTerm = "\/^"+postCode+"\/";
    var userIds = Meteor.users.find(
//       {"profile.postCode": {'$regex': search} },
      {"profile.postCode": search },
                           {fields: {_id: 1}}).map(function(doc){ return doc._id });
    var finalResults = Bmi.find({userId: userIds});
    
    var pipeline = [
      { $match : { userId : { $in: userIds } } },
      { $sort: {userId: 1, updatedAt: 1, bmi: 1}}, 
      { $group: {
        _id: "$userId",
        lastUpdate: { 
          $last: "$updatedAt"},
          bmi: {
            $last: "$bmi"}

      }
      },
      {
        $group:
          {
            _id: null,
//             total: {"$sum": 1},
            avgBmi: { $avg: "$bmi"}
          }
      }
    ];
    var result = Bmi.aggregate(pipeline);
//        var pcodeResults = Meteor.users.find(
//                            {"profile.postCode": "BD8 9PN"},
//                            {fields: {_id: 1}});

//     var resultmr = Bmi.mapReduce(map1, reduce1,{ out: "mapreducetest"});
    console.log(userIds);
//     console.log(finalResults);
    console.log(result[0]);
    return result[0];
//     var pipeline2 = [
//       { $sort: {userId: 1, updatedAt: 1, bmi: 1}},
//       { $group: {
//         _id: {
//           "userId": "$userId",
//           "bmi":    "$bmi"
//         },
//         lastUpdate: { 
//           $last: "$updatedAt"}
//       }
//       }
//     ];
//     var pipeline2 = [
//       { $group: {
//         _id: {
//           "userId": "$userId",
//           "bmi":    "$bmi"
//         },
//         "bmiCount": { "$sum": 1 }
//       }},
//       { "$group": {
//         "_id": "$_id.userId",
//         "bmis": {
//           "$push": {
//             "bmi": "$_id.bmi",
//             "count": "$bmiCount"
//         },
//       },
//        "count": { "$sum": "$bmiCount" }
//       }},
//       { "$sort": { "count": -1}},
//     ];
//     var map1 = function () {
//       emit(this.userId, this.bmi);
//     };
//     var reduce1 = function (keyUserId, valuesBmis) {
//       return valuesBmis;
//     };
  },
  //--Weight Aggregation functions for overall userbase
  latestUserWeight: function() {
    var pipeline = [
      { $sort: {userId: 1, updatedAt: 1, weight: 1}}, 
      { $group: {
        _id: "$userId",
        lastUpdate: { 
          $last: "$updatedAt"},
          weight: {
            $last: "$weight"}

      }
      }
    ];
    var result = Weights.aggregate(pipeline);
//     var resultmr = Bmi.mapReduce(map1, reduce1,{ out: "mapreducetest"});
    console.log(result);
    return result;
  },
  overallAvgWeight: function() {
    var pipeline = [
      { $sort: {userId: 1, updatedAt: 1, weight: 1}}, 
      { $group: {
        _id: "$userId",
        lastUpdate: { 
          $last: "$updatedAt"},
        weight: {
          $last: "$weight"}

      }
      },
      {
        $group:
        {
          _id: null,
          //             total: {"$sum": 1},
          avgWeight: { $avg: "$weight"}
        }
      }
    ];
    var result = Weights.aggregate(pipeline);
    console.log(result);
    return result[0];

  },
  latestUserWeightsByPCode: function(postCode) {
//     var bmis = Meteor.users;
//    var pipeline = [{$group: {_id: "$bmi", usersinBmi : { $sum: 1 }}}];
//         var pipeline = [{$group: {_id: "$weight", weights : { $sum: 1 }}}];
    var search = new RegExp(postCode, 'i');  //http://stackoverflow.com/questions/22180545/meteor-issues-with-regex-in-mongodb
    var searchTerm = "\/^"+postCode+"\/";
    var userIds = Meteor.users.find(
//       {"profile.postCode": {'$regex': search} },
      {"profile.postCode": search },
                           {fields: {_id: 1}}).map(function(doc){ return doc._id });
    var finalResults = Weights.find({userId: userIds});
    
    var pipeline = [
      { $match : { userId : { $in: userIds } } },
      { $sort: {userId: 1, updatedAt: 1, weight: 1}}, 
      { $group: {
        _id: "$userId",
        lastUpdate: { 
          $last: "$updatedAt"},
          weight: {
            $last: "$weight"}

      }
      },
      {
        $group:
          {
            _id: null,
//             total: {"$sum": 1},
            avgWeight: { $avg: "$weight"}
          }
      }
    ];
    var result = Weights.aggregate(pipeline);
//        var pcodeResults = Meteor.users.find(
//                            {"profile.postCode": "BD8 9PN"},
//                            {fields: {_id: 1}});

//     var resultmr = Bmi.mapReduce(map1, reduce1,{ out: "mapreducetest"});
    console.log(userIds);
//     console.log(finalResults);
    console.log(result[0]);
    return result[0];
//     var pipeline2 = [
//       { $sort: {userId: 1, updatedAt: 1, bmi: 1}},
//       { $group: {
//         _id: {
//           "userId": "$userId",
//           "bmi":    "$bmi"
//         },
//         lastUpdate: { 
//           $last: "$updatedAt"}
//       }
//       }
//     ];
//     var pipeline2 = [
//       { $group: {
//         _id: {
//           "userId": "$userId",
//           "bmi":    "$bmi"
//         },
//         "bmiCount": { "$sum": 1 }
//       }},
//       { "$group": {
//         "_id": "$_id.userId",
//         "bmis": {
//           "$push": {
//             "bmi": "$_id.bmi",
//             "count": "$bmiCount"
//         },
//       },
//        "count": { "$sum": "$bmiCount" }
//       }},
//       { "$sort": { "count": -1}},
//     ];
//     var map1 = function () {
//       emit(this.userId, this.bmi);
//     };
//     var reduce1 = function (keyUserId, valuesBmis) {
//       return valuesBmis;
//     };
  },
  //--Blood Sugar Aggregation functions for overall userbase
  latestUserBSugar: function() {
    var pipeline = [
      { $sort: {userId: 1, updatedAt: 1, bloodsugar: 1}}, 
      { $group: {
        _id: "$userId",
        lastUpdate: { 
          $last: "$updatedAt"},
          weight: {
            $last: "$bloodsugar"}

      }
      }
    ];
    var result = BloodSugar.aggregate(pipeline);
//     var resultmr = Bmi.mapReduce(map1, reduce1,{ out: "mapreducetest"});
    console.log(result);
    return result;
  },
  overallAvgBSugar: function() {
    var pipeline = [
      { $sort: {userId: 1, updatedAt: 1, bloodsugar: 1}}, 
      { $group: {
        _id: "$userId",
        lastUpdate: { 
          $last: "$updatedAt"},
        bloodsugar: {
          $last: "$bloodsugar"}

      }
      },
      {
        $group:
        {
          _id: null,
          //             total: {"$sum": 1},
          avgBloodSugar: { $avg: "$bloodsugar"}
        }
      }
    ];
    var result = BloodSugar.aggregate(pipeline);
    console.log(result);
    return result[0];

  },
  
  
  
  //custom update methods used in hooks for aldeed:autoform package
  updateWeight: function(doc){
    var insertDoc = {
      userId: this.userId,
//       updatedAt: new Date(),
      weight: doc.weight,
      comments: doc.comments
    };
    console.log(insertDoc);
    Weights.insert(insertDoc);
    var weight = doc.weight;
    var height = Meteor.user().profile.height;
    var heightSq = height^2
    var bmi = weight/heightSq;
    var bmiDoc = {
      userId: this.userId,
//       updatedAt: new Date(),
      bmi: bmi
    };
    Bmi.insert(bmiDoc);
  }
});
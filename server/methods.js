Meteor.methods({
  userBmi: function() {
//     var bmi = function() {
//        return Weights.find();
//     }
    return Meteor.users.find({}, {'profile.bmi': 1}).fetch();
  },
  bmiAggrfx: function() {
//     var bmis = Meteor.users;
//    var pipeline = [{$group: {_id: "$bmi", usersinBmi : { $sum: 1 }}}];
//         var pipeline = [{$group: {_id: "$weight", weights : { $sum: 1 }}}];
    
    var pipeline1 = [
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
    var result = Bmi.aggregate(pipeline1);
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
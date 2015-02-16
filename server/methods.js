Meteor.methods({
  userBmi: function() {
//     var bmi = function() {
//        return Weights.find();
//     }
    return Meteor.users.find({}, {'profile.bmi': 1}).fetch();
  },
  bmiAggrfx: function() {
//     var bmis = Meteor.users;
   var pipeline = [{$group: {_id: "$bmi", usersinBmi : { $sum: 1 }}}];
//         var pipeline = [{$group: {_id: "$weight", weights : { $sum: 1 }}}];
    var result = Bmi.aggregate(pipeline);
    console.log(result);
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
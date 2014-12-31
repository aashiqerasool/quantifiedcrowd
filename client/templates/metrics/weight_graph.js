var DateFormats = {
       short: "DD MMMM - YYYY",
       long: "dddd DD.MM.YYYY HH:mm",
       shortUK: "DD/MM/YYYY"
};

UI.registerHelper("formatDate", function(datetime, format) {
  if (moment) {
    f = DateFormats[format];
    return moment(datetime).format(f);
  }
  else {
    return datetime;
  }
});

Template.weightGraph.helpers({
  weightHistoryList: function(){
    return Weights.find({userId: Meteor.userId()}, {sort: {updatedAt: -1}});
  }
});

// Template.chart.rendered = function() {
    
// //     var weights = Weights.find({userId: Meteor.userId()}, {sort: {updatedAt: -1}}).fetch();
// //     var dataset = [];
// //     weights.forEach(function(weight) {
// //       var item = {
// //         "date": weight.updatedAt,
// //         "weight": weight.weight
// //       };
// //       dataset.push(item);
// //     });
// //   console.log(JSON.stringify(dataset));
// //   var weightsAsJSON = JSON.stringify(dataset);
  
//   Session.set('x', ['x', 30, 50, 75, 100, 120]);
//   Session.set('data1', ['data1', 30, 200, 100, 400, 150]);
//   Session.set('data2', ['data2', 20, 180, 240, 100, 190]);
//   var chart = c3.generate({
//     bindto: this.find('.chart'),
//       data: {
//         xs: {
//           'data1': 'x',
//           'data2': 'x'
//         },
//         columns: [['x'],['data1'],['data2']]
//       }
//   });

//   this.autorun(function (tracker) {
//     chart.load({columns: [
//       Session.get('x'),
//       Session.get('data1'),
//       Session.get('data2'),
//       []
//     ]});
//   });
// }

Template.chart.helpers({
  weightProgressChart: function() {
    var weights = Weights.find({userId: Meteor.userId()}, {sort: {updatedAt: -1}}).fetch();
    var dataset = [];
    var weightsOnly = [];
    var datesOnly = [];
    
    weights.forEach(function(weight) {
      var item = {
        "date": weight.updatedAt,
        "weight": weight.weight
      };
      
//       var item2 = {
//         "weight": weight.weight
//       };
   
      dataset.push(item);
      weightsOnly.push(weight.weight);
      datesOnly.push(moment(weight.updatedAt).format("DD/MM/YYYY"));
    });
  console.log(JSON.stringify(dataset));
  var weightsAsJSON = JSON.stringify(dataset);
  var weightsOnlyAsJSON = JSON.stringify(weightsOnly);  
  console.log(datesOnly);  
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: datesOnly
//           ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'KG'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: Meteor.user().profile.firstName+'\'s Weight Progress',
            data: weightsOnly
        }]
    };
  }});


Template.weightGraph.rendered = function () {
// $( document ).ready(function() {
//     //Get the context of the canvas element we want to select
//     var ctx = document.getElementById("myChart").getContext("2d");
//     var myNewChart = new Chart(ctx).Line(data,null);
//   });


};
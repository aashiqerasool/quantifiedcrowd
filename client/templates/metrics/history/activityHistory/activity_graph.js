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

// Template.chart.helpers({
//   weightProgressChart: function() {
//     var weights = Weights.find({userId: Meteor.userId()}, {sort: {updatedAt: 1}}).fetch();
//     var dataset = [];
//     var weightsOnly = [];
//     var datesOnly = [];
    
//     weights.forEach(function(weight) {
//       var item = {
//         "date": weight.updatedAt,
//         "weight": weight.weight
//       };
      
// //       var item2 = {
// //         "weight": weight.weight
// //       };
   
//       dataset.push(item);
//       weightsOnly.push(weight.weight);
//       datesOnly.push(moment(weight.updatedAt).format("DD/MM/YYYY"));
//     });
//   console.log(JSON.stringify(dataset));
//   var weightsAsJSON = JSON.stringify(dataset);
//   var weightsOnlyAsJSON = JSON.stringify(weightsOnly);  
//   console.log(datesOnly);  
//     return {
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: null,
//             plotShadow: false
//         },
//         title: {
//             text: Meteor.user().profile.firstName+'\'s Weight Progress',
//             align: 'center',
//             x: -20 //center
//         },
//         subtitle: {
//             text: '',
//           margin: 30,
//             x: -20
//         },
//         xAxis: {
//             categories: datesOnly
// //           ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
// //                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//         },
//         yAxis: {
//             title: {
//                 text: 'Weight (KG)'
//             },
//             plotLines: [{
//                 value: 0,
//                 width: 1,
//                 color: '#808080'
//             }]
//         },
//         tooltip: {
//             valueSuffix: 'KG'
//         },
//         legend: {
//             layout: 'vertical',
//             align: 'center',
//             verticalAlign: 'bottom',
//             floating: false,
//             margin: 15,
//             borderWidth: 0
//         },
//         series: [{
//             name: Meteor.user().profile.firstName+'\'s Weight Progress',
//             data: weightsOnly
//         }]
//     };
//   }});
var user = Meteor.user();
function buildActivityLine() {
    var lastFourWeeks = new Date(Date.now() - 1000 * 3600 * 24 * 7 * 4);
    var lastTwoWeeks = new Date(Date.now() - 1000 * 3600 * 24 * 7 * 2);
    var activities = Activities.find({userId: Meteor.userId(), updatedAt: {$gt: lastFourWeeks}}, {sort: {activityDate: 1}}).fetch();
    var dataset = [];
    var activitiesOnly = [];
    var datesOnly = [];
    
    activities.forEach(function(activity) {
      var item = {
        "date": activity.activityDate,
        "activity": activity.activityHours,
        "tags": activity.tags
      };
      
//       var item2 = {
//         "weight": weight.weight
//       };
   
      dataset.push(item);
      activitiesOnly.push(activity.activityHours);
      datesOnly.push(moment(activity.activityDate).format("DD/MM/YYYY"));
    });
  console.log(JSON.stringify(dataset));
  var activitiesAsJSON = JSON.stringify(dataset);
  var activitiessOnlyAsJSON = JSON.stringify(activitiesOnly);  
  console.log(datesOnly);  
  console.log(JSON.stringify(dataset));
    $('#activityLine').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: Meteor.user().profile.firstName+'\'s Blood Sugar History',
            align: 'center',
            x: -20 //center
        },
        subtitle: {
            text: '',
          margin: 30,
            x: -20
        },
        xAxis: {
            categories: datesOnly,
//           ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            labels: {
              rotation: 85,
              autoRotation: [-10, -20, -30, -40, -50, -60, -70, -80, -90],
              style: {
                whiteSpace: 'nowrap'
              }
            }          
        },
        yAxis: {
            title: {
                text: 'Hours'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Hours',
            shared: true,
            useHTML: true,
            headerFormat: '<large>{point.key}</large><table>',
            pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                '<td style="text-align: right"><b>{point.y}</b></td></tr><br>',
            footerFormat: '</table>'
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            floating: false,
            margin: 15,
            borderWidth: 0
        },
        series: [{
            name: Meteor.user().profile.firstName+'\'s Activity History',
            data: activitiesOnly
        }]
    })
  }


Template.activityChart.rendered = function () {
    this.autorun(function (c) {
//       console.log(Session.get('latestUserBmisByPCode'));  
      if(Meteor.user() !== undefined){
      buildActivityLine();
      }
    });
}
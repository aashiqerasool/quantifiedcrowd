Meteor.subscribe("healthCalDataPub");

Template.calendar.rendered = function () {
  var calendar = $('#calendar').fullCalendar({
    dayClick: function (date, jsEvent, view) {
      var calEvt = {};
      calEvt.start = new Date(date);
      calEvt.end = new Date(date);
      calEvt.title = 'New Event - please edit';
      calEvt.type = '';
      calEvt.location = '';
      calEvt.owner = Meteor.userId();
      Meteor.call('saveCalEvt', calEvt);
    },
    events: function (start, end, timezone, callback) {
      var calEvts = HealthCalData.find({},{reactive:false}).fetch();
      console.log(calEvts);
      callback(calEvts);
    },
    eventClick:function(calEvent,jsEvent,view){
//       Session.set('editing_event',calEvent._id);
      Router.go('/healthCal/editEvent/'+calEvent._id);
//       $('#title').val(calEvent.title);
    },    
  }).data().fullCalendar;
  Tracker.autorun(function() {
    HealthCalData.find().fetch();
    if(calendar){
      calendar.refetchEvents();
    }
  })
}
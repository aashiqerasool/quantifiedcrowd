Meteor.subscribe("healthCalDataPub");

Template.calendar.rendered = function () {
  var calendar = $('#calendar').fullCalendar({
    header: {
      left:   'title',
      center: 'today month,agendaWeek,agendaDay',
      right:  'prev,next'
    },
    titleFormat: 'MM-DD-YYYY',
    defaultView: 'agendaDay',
    firstDay: 1,
//     height: 450,
    contentHeight: 440,
//     aspectRatio: 1.50,
    dayClick: function (date, jsEvent, view) {
      Router.go('/healthCal/newEvent/');
//       var calEvt = {};
//       calEvt.start = new Date(date);
//       calEvt.end = new Date(date);
//       calEvt.title = 'New Event - please edit';
//       calEvt.type = '';
//       calEvt.location = '';
//       calEvt.owner = Meteor.userId();
//       Meteor.call('saveCalEvt', calEvt);
    },
    events: function (start, end, timezone, callback) {
      var calEvts = HealthCalData.find({},{reactive:false}).fetch();
      console.log(calEvts);
      callback(calEvts);
    },
    eventClick:function(calEvent,jsEvent,view){
      Session.set('editing_event',calEvent._id);
      Router.go('/healthCal/editEvent/'+calEvent._id);
      console.log(Session.get('editing_event'));
//       $('#title').val(calEvent.title);
    },
    editable:true,
    selectable:true    
  }).data().fullCalendar;
  Tracker.autorun(function() {
    HealthCalData.find().fetch();
    if(calendar){
      calendar.refetchEvents();
    }
  })
}

Template.calendar.events({
//   'click .gotoToday':function(evt,tmpl){
// //     var title = tmpl.find('#title').value;
// //     Meteor.call('updateTitle',Session.get('editing_event'),title);
// //     Session.set('editing_event',null);
// //     Router.go('healthCal');
//     $('calendar').fullCalendar('today');
//   }
});


Template.editEventDialog.events({
  'click .updateEvent':function(evt,tmpl){
    var title = tmpl.find('#title').value;
    Meteor.call('updateTitle',Session.get('editing_event'),title);
    Session.set('editing_event',null);
    Router.go('healthCal');
  }
});

AutoForm.addHooks(['newEventForm', 'editEventForm'], {
    onSuccess: function () {
      Router.go('/healthcal');
    }
  });
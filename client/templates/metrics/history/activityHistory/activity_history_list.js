Template.activityHistoryList.helpers({
  activityHistoryList: function(){
    return Activities.find({userId: Meteor.userId()}, {sort: {updatedAt: -1}});
  },
  settings: function () {
        return {
            rowsPerPage: 5,
            showFilter: false,
            fields: [
    { key: 'activityDate', 
      label: 'Activity Date', 
      fn: function (value, object) { 
        var date = new Date(value);
        var dateYear = date.getFullYear();
        var dateDay = date.getDate();
        var dateMonth = date.getMonth();
        var dateFormatted = date.toString("dd-MM-yyyy");
        return dateDay + "/" + (dateMonth+1) + "/" + dateYear; } },
      { key: 'updatedAt', 
      label: 'Added Date', 
      fn: function (value, object) { 
        var date = new Date(value);
        var dateYear = date.getFullYear();
        var dateDay = date.getDate();
        var dateMonth = date.getMonth();
        var dateFormatted = date.toString("dd-MM-yyyy");
        return dateDay + "/" + (dateMonth+1) + "/" + dateYear; } },        
    { key: 'activityHours', label: 'Activity Hours' },
    { key: 'tags', label: 'Tags' }
],
          useFontAwesome: true,
          sortByValue: true
        };
    }
});

Meteor.subscribe("userActivityData");
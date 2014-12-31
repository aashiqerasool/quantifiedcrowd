Template.weightHistoryList.helpers({
  weightHistoryList: function(){
    return Weights.find({userId: Meteor.userId()}, {sort: {updatedAt: -1}});
  },
  settings: function () {
        return {
            rowsPerPage: 5,
            showFilter: true,
            fields: [
    { key: 'updatedAt', 
      label: 'Date', 
      fn: function (value, object) { 
        var date = new Date(value);
        var dateYear = date.getFullYear();
        var dateDay = date.getDate();
        var dateMonth = date.getMonth();
        var dateFormatted = date.toString("dd-MM-yyyy");
        return dateDay + "/" + dateMonth + "/" + dateYear; } },
    { key: 'weight', label: 'Weight' }
],
          useFontAwesome: true,
          sortByValue: true
        };
    }
});
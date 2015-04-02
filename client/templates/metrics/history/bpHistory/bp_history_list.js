Template.bpHistoryList.helpers({
  bpHistoryList: function(){
    return BloodPressure.find({userId: Meteor.userId()}, {sort: {updatedAt: -1}});
  },
  settings: function () {
        return {
            rowsPerPage: 5,
            showFilter: false,
            fields: [
    { key: 'updatedAt', 
      label: 'Date', 
      fn: function (value, object) { 
        var date = new Date(value);
        var dateYear = date.getFullYear();
        var dateDay = date.getDate();
        var dateMonth = date.getMonth();
        var dateFormatted = date.toString("dd-MM-yyyy");
        return dateDay + "/" + (dateMonth+1) + "/" + dateYear; } },
    { key: 'bloodpressure', label: 'Blood Pressure \(Systolic\\Diastolic\)',
      fn: function(value, object) {
        var bloodPressure = value;
        var systolic = bloodPressure.systolic;
        var diastolic = bloodPressure.diastolic;
        var bpFormatted = systolic + "/" + diastolic;
        return bpFormatted;
      }}
],
          useFontAwesome: true,
          sortByValue: true
        };
    }
});

Meteor.subscribe("userBloodPressureData");
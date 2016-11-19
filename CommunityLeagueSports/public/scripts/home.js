var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
  });

  $(document).ready(function() {

// page is now ready, initialize the calendar...
  //var MongoClient = require('mongodb').MongoClient
  //, assert = require('assert');

  /*var url = 'mongodb://localhost:27017/test'
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();*/
  $('#calendar').fullCalendar({
  // put your options and callbacks here
    header: {
       left: 'prev,next today',
       center: 'title',
       right: 'month,agendaWeek,agendaDay'
    },
    events: [
        {
            title  : 'event1',
            start  : '2016-11-20'
        },
        {
            title  : 'event2',
            start  : '2016-11-23',
            end    : '2016-11-27'
        }
    ]
    /*,
    events: function(date, sport, timezone, callback) {
        $.ajax({
            url: 'mongodb://localhost:27017/CommunityLeagueSports',
            dataType: 'jsonp',
            crossDomain: true,
            data: {
                // our hypothetical feed requires UNIX timestamps
                date: date.unix(),
                title: sport.unix()
            },
            success: function(doc) {
                var events = [];
                $(doc).find('event').each(function() {
                    events.push({
                        title: $(this).attr('title'),
                        start: $(this).attr('start') // will be parsed
                    });
                });
                callback(events);
            }
        });
    }*/
  })

});

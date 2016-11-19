var app = angular.module('CommunityLeagueSports', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: '/add.html',
        controller: 'TeamCtrl',
        resolve: {
          postPromise: ['teams', function(teams) {
            return teams.getAll();
          }]
        }
      });

      $urlRouterProvider.otherwise('add');
  }
]);

app.factory('teams', ['$http', function($http) {
  var o = {
    teams: []
  };

  o.getAll = function() {
    return $http.get('/teams').success(function(data){
      angular.copy(data, o.teams);
    });
  };

  o.create = function(team) {
    return $http.post('/teams', team).success(function(data) {
      o.teams.push(data);
    });
  };

  o.get = function(id) {
    return $http.get('/teams/' + id).then(function(res){
      return res.data;
    });
  };

  return o;
}]);

app.controller('TeamCtrl', [
  '$scope',
  'teams',
  function($scope, teams){
    $scope.teams = teams.teams;

    $scope.addTeam = function(){
      if(!$scope.name || $scope.name === '') { return; }

      teams.create({
        name: $scope.name,
        sport: $scope.sport,
        leagueID: $scope.leagueID
      });

      $scope.name = '';
      $scope.sport = '';
      $scope.leagueID = '';
    };
  }
]);
var app = angular.module('CommunityLeagueSports', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: '/add.html',
        controller: 'LeagueCtrl',
        resolve: {
          postPromise: ['leagues', function(leagues) {
            return leagues.getAll();
          }]
        }
      });

      $urlRouterProvider.otherwise('add');
  }
]);

app.factory('leagues', ['$http', function($http) {
  var o = {
    leagues: []
  };

  o.getAll = function() {
    return $http.get('/leagues').success(function(data){
      angular.copy(data, o.leagues);
    });
  };

  o.create = function(league) {
    return $http.post('/leagues', league).success(function(data) {
      o.leagues.push(data);
    });
  };

  o.get = function(id) {
    return $http.get('/leagues/' + id).then(function(res){
      return res.data;
    });
  };

  return o;
}]);

app.controller('LeagueCtrl', [
  '$scope',
  'leagues',
  function($scope, leagues){
    $scope.leagues = leagues.leagues;

    $scope.addLeague = function(){
      if(!$scope.name || $scope.name === '') { return; }

      leagues.create({
        name: $scope.name,
        sport: $scope.sport,
        organization: $scope.organization
      });

      $scope.name = '';
      $scope.sport = '';
      $scope.organization = '';
    };
  }
]);
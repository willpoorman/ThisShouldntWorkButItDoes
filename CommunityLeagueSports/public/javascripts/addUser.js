var app = angular.module('CommunityLeagueSports', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: '/add.html',
        controller: 'UserCtrl',
        resolve: {
          postPromise: ['users', function(users) {
            return users.getAll();
          }]
        }
      });

      $urlRouterProvider.otherwise('add');
  }
]);

app.factory('users', ['$http', function($http) {
  var o = {
    users: []
  };

  o.getAll = function() {
    return $http.get('/users').success(function(data){
      angular.copy(data, o.users);
    });
  };

  o.create = function(user) {
    return $http.post('/users', user).success(function(data) {
      o.users.push(data);
    });
  };

  o.get = function(id) {
    return $http.get('/users/' + id).then(function(res){
      return res.data;
    });
  };

  return o;
}]);

app.controller('UserCtrl', [
  '$scope',
  'users',
  function($scope, users){
    $scope.users = users.users;

    $scope.addUser = function(){
      if(!$scope.name || $scope.name === '') { return; }

      users.create({
        username: $scope.username,
        teamID: $scope.teamID,
        password: $scope.password,
        email: $scope.email,
        type: $scope.type
      });

      $scope.username = '';
      $scope.teamID = '';
      $scope.password = '';
      $scope.email = '';
      $scope.type = '';
    };
  }
]);
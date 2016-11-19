var app = angular.module('CommunityLeagueSports', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: '/add.html',
        controller: 'OrgCtrl',
        resolve: {
          postPromise: ['organizations', function(organizations) {
            return organizations.getAll();
          }]
        }
      });

      $urlRouterProvider.otherwise('add');
  }
]);

app.factory('organizations', ['$http', function($http) {
  var o = {
    organizations: []
  };

  o.getAll = function() {
    return $http.get('/organizations').success(function(data){
      angular.copy(data, o.organizations);
    });
  };

  o.create = function(organization) {
    return $http.post('/organizations', organization).success(function(data) {
      o.organizations.push(data);
    });
  };

  o.get = function(id) {
    return $http.get('/organizations/' + id).then(function(res){
      return res.data;
    });
  };

  return o;
}]);

app.controller('OrgCtrl', [
  '$scope',
  'organizations',
  function($scope, organizations){
    $scope.organizations = organizations.organizations;

    $scope.addOrganization = function(){
      if(!$scope.name || $scope.name === '') { return; }

      organizations.create({
        name: $scope.name,
      });

      $scope.name = '';
    };
  }
]);
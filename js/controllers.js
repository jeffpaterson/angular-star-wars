app.controller('PeopleController', function($scope, $http) {
  
  $scope.getRandomPerson = function() {
    $http.get('http://swapi.co/api/people/').then(function(res) {
      var count = res.data.count;
      var randomPerson = Math.ceil(Math.random() * count)
      return $http.get('http://swapi.co/api/people/' + randomPerson);
    }).then(function(res) {
      $scope.data = res.data;
    });
  };

});

app.controller('PlanetsController', function($scope) {

  $scope.getRandomPlanet = function() {
    $.get('http://swapi.co/api/planets/').then(function(res) {
      var count = res.count;
      var randomPlanet = Math.ceil(Math.random() * count)
      return $.get('http://swapi.co/api/planets/' + randomPlanet);
    }).then(function(res) {
      // console.log(res)
      $scope.data = res;
      // $scope.$apply();
    });
  };

});
var app = angular.module('starWarsApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../partials/home.html'
    })
    .when('/people', {
      templateUrl: '../partials/people.html',
      controller: 'PeopleController'
    })
    .when('/planets', {
      templateUrl: '../partials/planets.html',
      controller: 'PlanetsController'
    })
    .when('/films', {
      templateUrl: '../partials/films.html',
      controller: 'FilmsController'
    })
    .when('/species', {
      templateUrl: '../partials/species.html',
      controller: 'SpeciesController'
    })
    .when('/vehicles', {
      templateUrl: '../partials/vehicles.html',
      controller: 'VehiclesController'
    })
    .when('/starships', {
      templateUrl: '../partials/starships.html',
      controller: 'StarshipsController'
    });
  $locationProvider.html5Mode(true);
});
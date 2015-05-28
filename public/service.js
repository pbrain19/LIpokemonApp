"use strict";

angular.module('app')
  .factory('Pokemon', function ($http, $q) {

    function getAllPokemon() {
      var deferred = $q.defer();

      $http.get('http://pokeapi.co/api/v1/pokedex/1/')
        .success(function(response) {
          deferred.resolve(response);
        });

      return deferred.promise;
    }

    function getPokemon(id) {
      var deferred = $q.defer();

      $http.get('http://pokeapi.co/api/v1/pokemon/' + id)
        .success(function(response) {
          deferred.resolve(response);
        });

      return deferred.promise;
    }

    return {
      getAllPokemon: getAllPokemon,
      getPokemon: getPokemon
    }

  })
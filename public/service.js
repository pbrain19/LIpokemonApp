"use strict";



angular.module('app')
  .factory('Pokemon', function ($http, $q) {

    function get(entity, id) {
      var deferred = $q.defer();
      var id = id || 1;


      $http.get('http://pokeapi.co/api/v1/' + entity + '/' + id)
        .success(function (response) {
          deferred.resolve(response);

        });

      return deferred.promise;
    }

    return {
      get: get
    }

  })


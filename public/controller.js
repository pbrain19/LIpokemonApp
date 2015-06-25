"use strict";

angular.module('app')
.controller('DemoController', function($scope, $http, Pokemon){

    Pokemon.get('pokedex')
      .then(function(data) {
        $scope.allPokemon = data.pokemon; 
      })


    $scope.get = function() {

      console.log('hey it works here')
      var id = $scope.pokemonid;
      Pokemon.get('pokemon', id)
        .then(function(data) {
          $scope.newPokemon = data;
        })

    }

  })
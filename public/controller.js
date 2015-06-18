"use strict";

angular.module('app')
.controller('DemoController', function($scope, $http, Pokemon){

    
    $scope.getPokemon = function() {

      console.log('hey it works here')
      var id = $scope.pokemonid;
      Pokemon.getPokemon(id)
        .then(function(data) {
          $scope.newPokemon = data;
        })

    }


    Pokemon.getAllPokemon()
      .then(function(data) {
        $scope.pokemon = data.pokemon;
      });

  })
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

    function getPokemonMoves (moves){
    	var deferred = $q.defer();

    	$http.get ('http://pokeapi.co/api/v1/move/1/' + moves)
    	.success(function(response){
    		deferred.resolve(response);
    	});

      return deferred.promise;
    }

    function getPokemonType (typeid){
      var deferred = $q.defer();
     
     $http.get('http://pokeapi.co/api/v1/type/' + typeid)
        .success(function(response){
          deferred.resolve(response);
      });

        return deferred.promise;

    }

    function getPokemonAbility (abilityId){
      var deferred = $q.defer();
     
     $http.get('http://pokeapi.co/api/v1/ability/' + abilityId)
        .success(function(response){
          deferred.resolve(response);
      });

        return deferred.promise;

    }

   function getPokemonEgg (eggId){
      var deferred = $q.defer();
     
     $http.get('http://pokeapi.co/api/v1/egg/' + eggId)
        .success(function(response){
          deferred.resolve(response);
      });

        return deferred.promise;

    }

   function getPokemonSprite (spriteId){
      var deferred = $q.defer();
     
     $http.get('http://pokeapi.co/api/v1/sprite/' + spriteId)
        .success(function(response){
          deferred.resolve(response);
      });

        return deferred.promise;

    }

   function getPokemonDescription (descriptionId){
      var deferred = $q.defer();
     
     $http.get('http://pokeapi.co/api/v1/description/' + descriptionId)
        .success(function(response){
          deferred.resolve(response);
      });

        return deferred.promise;

    }

       function getPokemonGame (gameId){
      var deferred = $q.defer();
     
     $http.get('http://pokeapi.co/api/v1/game/' + gameId)
        .success(function(response){
          deferred.resolve(response);
      });

        return deferred.promise;

    }


    return {
      getAllPokemon: getAllPokemon,
      getPokemon: getPokemon,
      getPokemonMoves: getPokemonMoves,
      getPokemonType: getPokemonType,
      getPokemonAbility: getPokemonAbility,
      getPokemonEgg: getPokemonEgg,
      getPokemonSprite: getPokemonSprite,
      getPokemonDescription: getPokemonDescription,
      getPokemonGame: getPokemonGame
    }

  })


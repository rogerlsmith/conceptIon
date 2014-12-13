angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalLogin = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modalLogin.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modalLogin.show();
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


  // Form data for the Register modal
  $scope.registerData = {};

  // Create the Register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalRegister = modal;
  });


  // Triggered in the Register modal to close it
  $scope.closeRegister = function() {
    $scope.modalRegister.hide();
  };


  // Open the Register modal
  $scope.register = function() {
    $scope.modalRegister.show();
  };


  // Perform the Register action when the user submits the Register form
  $scope.doRegister = function() {
    console.log('Doing register', $scope.registerData);

    // Simulate a Register delay. Remove this and replace with your REgister
    // code if using a Register system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
  };



})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

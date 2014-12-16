

angular.module ( 'starter.controllers', [] )


.controller ( 'AppCtrl', function ( $scope, $http, $ionicModal, $timeout ) {


/* Login */


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl ( 'templates/login.html', {
    scope: $scope
  }).then ( function ( modal ) {
    $scope.loginmodal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function ( ) {
    $scope.loginmodal.hide ( );
  };

  // Open the login modal
  $scope.login = function ( ) {
    $scope.loginmodal.show ( );
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function ( ) {
    console.log ( 'Doing login: ', $scope.loginData );

    $http.post ( 'http://rogerlsmith.net/concept/bower_components/bootstrap/mobile/user.php', {
          username: $scope.loginData.username,
          password: $scope.loginData.password,
          method: 'login'
      }).
      success ( function ( data, status, headers, config ) {
          alert ( "success" );

      }).
      error ( function ( data, status, headers, config ) {
          alert ( "Error" );
      });
  };



/* Register */


  // Form data for the register modal
  $scope.registerData = {};

  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then ( function ( modal ) {
    $scope.registermodal = modal;
  });

  // Triggered in the register modal to close it
  $scope.closeRegister = function ( ) {
    $scope.registermodal.hide ( );
  };

  // Open the register modal
  $scope.register = function ( ) {
    $scope.registermodal.show ( );
  };

  // Perform the register action when the user submits the register form
  $scope.doRegister = function ( ) {
    console.log('Doing register', $scope.registerData);

    $http.post ( 'http://rogerlsmith.net/concept/bower_components/bootstrap/mobile/user.php', {
          username: $scope.registerData.username,
          firstname: $scope.registerData.firstname,
          lastname: $scope.registerData.lastname,
          email: $scope.registerData.email,
          password: $scope.registerData.password,
          method: 'register'
      }).
      success ( function ( data, status, headers, config ) {
          alert ( "success" );
      }).
      error ( function ( data, status, headers, config ) {
          alert ( "Error" );
      });
    };


/* Forgot Password */


      // Form data for the forgot password modal
    $scope.forgotData = {};

    // Create the forgot password modal that we will use later
    $ionicModal.fromTemplateUrl ( 'templates/forgot.html', {
      scope: $scope
    }).then( function ( modal ) {
      $scope.forgotmodal = modal;
    });

    // Triggered in the forgot modal to close it
    $scope.closeForgot = function ( ) {
      $scope.forgotmodal.hide ( );
    };

    // Open the forgot password modal
    $scope.forgotPassword = function ( ) {
      $scope.forgotmodal.show ( );
    };

    // Perform the register action when the user submits the register form
    $scope.doForgot = function() {
      console.log ( 'Doing forgot password', $scope.forgotData );


      $http.post ( '/forgot', {
          username: $scope.forgotData.username,
          email: $scope.forgotData.email
        }).
        success( function ( data, status, headers, config ) {
            alert ( "success" );
        }).
        error( function ( data, status, headers, config ) {
            alert( "Error" );
        });
    };


    // $scope
    //   .uploadFile ( 'http://rogerlsmith.net/concept/bower_components/bootstrap/mobile/audio.php', 
    //     'test.mp3', 
    //     options )
    //   .then( function ( result ) {
    //      //Success
    //   }, function ( err ) {
    //       //Error
    //   }, function ( progress ) {
    //       //Constant Progress updates
    //   });



    // $scope.captureAudio = function() {
    //   var options = { limit: 3, duration: 10 };

    //   $cordovaCapture.captureAudio(options).then(function(audioData) {
    //     // Success! Audio data is here
    //   }, function(err) {
    //     // An error occurred. Show a message to the user
    //   });

  })        // end of AppCtrl


.controller ( 'AudioCtrl', function ( $scope ) {

  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.showPublic = function ( ) {

  };

  $scope.showPrivate = function ( ) {

  };

})        // end of AudioCtrl


.controller('PlaylistCtrl', function($scope, $stateParams) {
});       // end of PlaylistCtrl



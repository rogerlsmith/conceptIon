

angular.module ( 'starter.controllers', [] )


.controller ( 'AppCtrl', function ( $scope, $rootScope, $http, $cordovaFile, $cordovaMedia, $ionicModal, $timeout ) {


/* Login */

  $scope.options = {};

  // Form data for the login modal
  $scope.loginData = {};

  //
  // Create the login modal that we will use later
  //
  $ionicModal
    .fromTemplateUrl ( 'templates/login.html', {
      scope: $scope
    } )

    .then ( function ( modal ) {
      $scope.loginmodal = modal;
    } );

  //
  // Triggered in the login modal to close it
  //
  $scope.closeLogin = function ( ) {
    $scope.loginmodal.hide ( );
  };

  //
  // Open the login modal
  //
  $scope.login = function ( ) {
    $scope.loginmodal.show ( );
  };

  //
  // Perform the login action when the user submits the login form
  //
  $scope.doLogin = function ( ) {
    console.log ( 'Doing login: ', $scope.loginData );

    var formData = { 
      username: $scope.loginData.username,
      password: $scope.loginData.password,
      method: 'login'
    };

    $http ( {
        method  : 'POST',
        url     : 'http://rogerlsmith.net/concept/bower_components/bootstrap/mobile/user.php',
        data    : formData,
      } )

      .success ( function ( data, status, headers, config ) {
          if ( status == 200 ) {
            $rootScope.user = data;
            $scope.loginData.data = data;
            $scope.closeLogin ( );
          } else {
            alert ( "Login failure at server" );
            $scope.closeLogin ( );
          }
      } )

      .error ( function ( data, status, headers, config ) {
        alert ( "Login failure" );
        $scope.closeLogin ( );
      } );
  };

  $scope.getLoginInfo = function ( ) {
    return $scope.loginData.data;
  }

  $scope.loginFacebook = function ( ) {
    alert ( 'login facebook' );
  }

  $scope.loginGoogleplus = function ( ) {
    alert ( 'login google+' );
  }

  $scope.loginTwitter = function ( ) {
    alert ( 'login Twitter' );
  }

  $scope.loginLinkedin = function ( ) {
    alert ( 'login Linkedin' );
  }


/* Logout */

  //
  // Open the login modal
  //
  $scope.logout = function ( ) {
    $rootScope.user = null;
  };


/* Register */

  //
  // Form data for the register modal
  //
  $scope.registerData = {};

  // Create the register modal that we will use later
  $ionicModal
    .fromTemplateUrl ( 'templates/register.html', {
      scope: $scope
    } )

    .then ( function ( modal ) {
      $scope.registermodal = modal;
    } );

  //
  // Triggered in the register modal to close it
  //
  $scope.closeRegister = function ( ) {
    $scope.registermodal.hide ( );
  };

  //
  // Open the register modal
  //
  $scope.register = function ( ) {
    $scope.registermodal.show ( );
  };

  //
  // Perform the register action when the user submits the register form
  //
  $scope.doRegister = function ( ) {
    console.log( 'Doing register', $scope.registerData );

    var formData = { 
      username: $scope.registerData.username,
      password: $scope.registerData.password,
      email: $scope.registerData.email,
      method: 'register'
    };

    $http ( {
        method  : 'POST',
        url     : 'http://rogerlsmith.net/concept/bower_components/bootstrap/mobile/user.php',
        data    : formData,
      } )

      .success ( function ( data, status, headers, config ) {
          if ( status == 200 ) {
            alert ( "registration successful" );
            $scope.closeRegister ( );
            $scope.login ( );
          } else {
            alert ( "registration failure at server" );
            $scope.closeRegister ( );
          }
      } )

      .error ( function ( data, status, headers, config ) {
        alert ( "registration failure" );
        $scope.closeRegister ( );
      } );

    };

  $scope.getLoginInfo = function ( ) {
    return $scope.loginData.data;
  }

  $scope.registerFacebook = function ( ) {
    OAuth.popup ( 'facebook' )
      .done ( function ( result ) {
        //use result.access_token in your API request 
        //or use result.get|post|put|del|patch|me methods (see below)
      })
      .fail ( function ( err ) {
        //handle error with err
      });
  }

  $scope.registerGoogleplus = function ( ) {
    alert ( 'register google+' );
  }

  $scope.registerTwitter = function ( ) {
    OAuth.popup ( 'twitter' )
      .done ( function ( result ) {
        //use result.access_token in your API request 
        //or use result.get|post|put|del|patch|me methods (see below)
      })
      .fail ( function ( err ) {
        //handle error with err
      });
  }

  $scope.registerLinkedin = function ( ) {
    alert ( 'register Linkedin' );
  }


/* Forgot Password */


    // Form data for the forgot password modal
    $scope.forgotPasswordData = {};

    //
    // Create the forgot password modal that we will use later
    //
    $ionicModal
      .fromTemplateUrl ( 'templates/forgotPassword.html', {
        scope: $scope
      } )

      .then ( function ( modal ) {
        $scope.forgotmodal = modal;
      });

    //
    // Triggered in the forgot modal to close it
    //
    $scope.closeForgotPassword = function ( ) {
      $scope.forgotmodal.hide ( );
    };

    //
    // Open the forgot password modal
    //
    $scope.forgotPassword = function ( ) {
      $scope.forgotmodal.show ( );
    };

    //
    // Perform the resetPassword action when the user submits the forgotPassword form
    //
    $scope.doForgot = function ( ) {
      console.log ( 'Doing forgot password', $scope.forgotPasswordData );

      $http
        .post ( 'http://rogerlsmith.net/concept/bower_components/bootstrap/mobile/user.php', {
          username: $scope.forgotPasswordData.username,
          email: $scope.forgotPasswordData.email,
          method: 'reestPassword'
        })

        .success( function ( data, status, headers, config ) {
            alert ( "success" );
        })

        .error( function ( data, status, headers, config ) {
            alert ( "Error" );
        });

    };


/* Upload File */


    // data for upload 
    $scope.uploadData = {};

    $scope.upload = function ( ) {
      console.log ( 'Doing upload', $scope.uploadData );

      var p = {
         user_id: $scope.loginData.data.user.id,
      }

      var options = {
        chunkedMode: false,
        params: p,
        mimeType: 'audio/mpeg3'
      };

      $cordovaFile
        .uploadFile ( 
          'http://rogerlsmith.net/concept/bower_components/bootstrap/mobile/audio.php', 
          $scope.captureData.path,
          options )

        .then ( 
          function ( result ) {
            alert ( "success " + result );
          },

          function ( err ) {
             alert ( "failure " + err );
          }, 

          function ( progress ) {
             //Constant Progress updates
         } );

      };
      

/* Record Audio */


    // data for capture 
    $scope.captureData = {};
    
    $scope.captureAudio = function ( ) {
      console.log ( 'Doing audio capture', $scope.captureData );

      var options = { limit: 2 };

      navigator.device.capture.captureAudio (
      
        // success function for captureAudio
        function ( mediaFiles ) {
          var i, path, len;
          for (i = 0, len = mediaFiles.length; i < len; i += 1) {
              path = mediaFiles[i].fullPath;
              $scope.captureData.path = path;
          }
      },

      // fail function for captureAudio
      function ( ) {
        alert ("Fail");
      },

      options);

    };


    //
    // Create the make noise modal
    //
    $ionicModal
      .fromTemplateUrl ( 'templates/makeNoise.html', {
        scope: $scope
      } )

      .then ( function ( modal ) {
        $scope.makeNoiseModal = modal;
      } );


    // Triggered in the make noise modal to close it
    $scope.closeMakeNoise = function ( ) {
      $scope.makeNoiseModal.hide ( );
    };

    // Open the make noise modal
    $scope.makeNoise = function ( ) {
      $scope.makeNoiseModal.show ( );
    };

  } )        // end of AppCtrl


  .controller ( 'AudioCtrl', function ( $scope ) {

    $scope.playlists = [
      { title: 'Messages', id: 1 },
      { title: 'Songs', id: 2 },
      { title: 'Poetry', id: 3 },
      { title: 'Jokes', id: 4 },
      { title: 'Thoughts', id: 5 },
      { title: 'Sounds', id: 6 }
    ];

    $scope.showPublic = function ( ) {

    };

    $scope.showPrivate = function ( ) {

    };

  } )        // end of AudioCtrl


  .controller ( 'PlaylistCtrl', function ( $scope, $stateParams ) {
  } )       // end of PlaylistCtrl



  .controller ( 'FriendsController', function ( $scope, $cordovaContacts ) {
   
      $scope.getContactList = function ( ) {

        $cordovaContacts.find ( {filter: '' } )
          .then ( function ( result ) {
            $scope.contacts = result;
          },

          function ( error ) {
            console.log ( "ERROR: " + error );
        } ); 
      };


      $scope.findFriends = function ( ) {

        $scope.getContactList ( );

        $http ( {
          method  : 'POST',
          url     : 'http://rogerlsmith.net/concept/bower_components/bootstrap/mobile/friends.php',
          data    : $scope.contacts,
        } )

        .success ( function ( data, status, headers, config ) {
            if ( status == 200 ) {
              alert ( "find friends success" );
            } else {
              alert ( "find friends failure at server" );
            }
        } )

        .error ( function ( data, status, headers, config ) {
          alert ( "find friends failure" );
        } );
      }
   
  } );     // end of FriendsController



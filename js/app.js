

angular.module ( 'starter', ['ionic', 'ngCordova', 'starter.controllers'] )

.run ( function ( $ionicPlatform, $rootScope ) {

  $rootScope.user = null;

  //
  // ready
  //
  $ionicPlatform.ready ( function ( ) {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if ( window.cordova && window.cordova.plugins.Keyboard ) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar ( true );
    }

    if ( window.StatusBar ) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault ( );
    }

    OAuth.initialize ( '12jsWDI3spZo8YgQogcmGQJDro0' );
    
  } );

} )    // end of run


//
// config
//
.config ( function ( $stateProvider, $urlRouterProvider ) {


  $stateProvider
    .state ( 'app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/userMenu.html",
      controller: 'AppCtrl'
    } )

    //
    // main app search audio
    //
    .state ( 'app.search', {
      url: "/search",
      views: {
        'menuContent': {
          templateUrl: "templates/search.html"
        }
      }
    } )

    //
    // main app browse audio
    .state ( 'app.browse', {
      url: "/browse",
      views: {
        'menuContent': {
          templateUrl: "templates/browse.html"
        }
      }
    } )

    //
    //  playlists (should be removed)
    //
    .state ( 'app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'AudioCtrl'
        }
      }
    } )

    //
    // main app audio menu
    //
    .state ( 'app.makeNoise', {
      url: "/makeNoise",
      views: {
        'menuContent': {
          templateUrl: "templates/makeNoise.html",
          controller: 'AudioCtrl'
        }
      }
    } )


    .state ( 'app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent': {
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    } );


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise ( '/app/playlists' );

} );   // end of config



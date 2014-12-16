
//bower install ngCordova

angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])

.run ( function ( $ionicPlatform ) {

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
  });
})    // end of run

.config ( function ( $stateProvider, $urlRouterProvider ) {

  var showMenu = "templates/userLogin.html";

  var loggedin = false;
  if ( loggedin ) {
    showMenu = "templates/userMenu.html";
  }

  $stateProvider

  .state ( 'app', {
    url: "/app",
    abstract: true,
    templateUrl: showMenu,
    controller: 'AppCtrl'
  } )

  .state ( 'app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state ( 'app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state ( 'app.playlists', {
    url: "/playlists",
    views: {
      'menuContent': {
        templateUrl: "templates/playlists.html",
        controller: 'AudioCtrl'
      }
    }
  })

  .state ( 'app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise ( '/app/playlists' );

});   // end of config



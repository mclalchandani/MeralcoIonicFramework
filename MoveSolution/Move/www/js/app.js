// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.menucontrollers',
'starter.dashboardcontrollers',
'starter.maincontrollers',
'starter.logincontrollers',
'starter.Apply_NewRequest', 'starter.registration',
'starter.Intro_NewRequest','starter.services',
'starter.display_apply_newrequest'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })


  .state('app.apply_newrequest', {
    url: '/apply_newrequest',
    views: {
      'menuContent': {
    templateUrl: 'templates/apply_newrequest.html',
    controller: 'ApplyNewRequestCtrl'
     }
    }
  })

  .state('app.display_apply_newrequest', {
    url: '/display_apply_newrequest',
    views: {
      'menuContent': {
    templateUrl: 'templates/display_apply_newrequest.html',
    controller: 'display_apply_newrequestCtrl'
     }
    }
  })



  .state('app.intro_newrequest', {
    url: '/intro_newrequest',
    views: {
      'menuContent': {
    templateUrl: 'templates/intro_newrequest.html',
    controller: 'IntroNewRequestCtrl'
     }
    }
  })

 .state('app.registration', {
    url: '/register',
    views: {
      'menuContent': {
    templateUrl: 'templates/register.html',
    controller: 'RegistrationCtrl'
     }
    }
  })


  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
        controller: 'DashboardController'
      }
    }
  })



  .state('app.main',{
    cache: false,
    url: '/main',
        views:{
        'menuContent':{
        templateUrl:'templates/main.html',
        controller: 'MainCtrl'
      }
    }
  }
);


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});

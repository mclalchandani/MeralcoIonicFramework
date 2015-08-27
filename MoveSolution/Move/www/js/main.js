angular.module('starter.maincontrollers', [])

.controller('MainCtrl', function ($scope, $state, $ionicModal,$ionicNavBarDelegate) {

    //$scope.hidenavbarButton = false;

$scope.userLoggedIn=function(){
  return window.sessionStorage.getItem("loggedIn") != null;
}


$scope.submitForm = function ()
{
    
    if ($scope.userLoggedIn()) {
        $state.go('app.intro_newrequest');
    }
    else {
        //console.log("not login")
           $ionicModal.fromTemplateUrl('templates/login.html', function(modal) {
               $scope.loginLoaded = true;
               $scope.modal = modal;
               $scope.modal.show();
           },
        {
            scope: $scope,
            animation: 'slide-in-up'
        })}


    }



})

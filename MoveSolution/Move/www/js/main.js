angular.module('starter.maincontrollers', [])

.controller('MainCtrl', function ($scope, $state, $ionicModal,$ionicNavBarDelegate) {

    //$scope.hidenavbarButton = false;

$scope.showalert= function()
{
  var username = window.sessionStorage.getItem("userName");
  //alert(username);
  if (username != null) {
      $scope.hideme=false;
    }
    else {
      {
        $scope.hideme=true;
      }
    }
}

$scope.showalert();

$scope.submitForm = function ()
{
    //var user = $localstorage.getObject('user');

    var username = window.sessionStorage.getItem("userName");
    console.log(username);
    if (username != null) {
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

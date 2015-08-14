angular.module('starter.maincontrollers', [])

.controller('MainCtrl', function ($scope, $state, $ionicModal) {

    $scope.hidenavbarButton = false;
    


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

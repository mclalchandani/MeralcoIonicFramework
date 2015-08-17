angular.module('starter.display_apply_newrequest',[])
.controller('display_apply_newrequestCtrl', function($scope, $stateParams, $state,
crudservice,$ionicPopup) {

    //document.getElementById('first_name').setAttribute('value','xxxxx');
    $scope.users={}
    $scope.getmyapplication = function() {

      if (window.sessionStorage.getItem("userName")==null)
      {
        $state.go('app.main');
      }

      $stateParams.username=window.sessionStorage.getItem("userName");
      crudservice.getservbyId($stateParams.username).success(function(user) {
            $scope.users = user;
          }).finally(function() {
              $scope.$broadcast('scroll.refreshComplete');
          });
    };

$scope.getmyapplication();
})

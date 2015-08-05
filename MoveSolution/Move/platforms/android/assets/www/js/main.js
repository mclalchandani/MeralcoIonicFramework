angular.module('starter.maincontrollers',[])

.controller('MainCtrl',function($scope){

$scope.hidenavbarButton=false;


})

// .controller('MainCtrl',
// 	function($scope, $ionicModal, $compile, $ionicLoading, $timeout, $ionicPopup)
// 	{
//
//     $ionicModal.fromTemplateUrl('templates/main.html', function(modal) {
//       $scope.loginLoaded = true;
//       $scope.modal = modal;
//       $scope.modal.show();
//        },
//        {
//             scope: $scope,
//             animation: 'slide-in-up'
//        });
//
//   });

angular.module('starter.Apply_NewRequest', [])

.controller('ApplyNewRequestCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
  // Called to navigate to the main app


  $scope.startApp = function() {
    $state.go('app.intro_main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // $scope.$apply();
  $ionicSlideBoxDelegate.update();

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

  $scope.applicationtype=[
    {text: "Contract", value: "contract"},
    {text: "Re-contract", value: "recontract"}
  ];

  $scope.rateclass=[
    {text: "Commercial", value: "commercial"},
    {text: "Private", value: "private"}
  ];

  $scope.data = {
    applicationtype: 'ng'
  };

  $scope.applicationtypeChange =
  function(item){
    console.log("applicationtype selected text:", item.text, "selected value:", item.value);
  };

  $scope.rateclassChange =
  function(item){
    console.log("rateclass selected text:", item.text, "selected value", item.value);
  };



});


// .controller('intro_MainCtrl', function($scope, $state) {
//   console.log('intro_MainCtrl');
//
//   $scope.toIntro = function(){
//     $state.go('app.intro');
//   }
// });

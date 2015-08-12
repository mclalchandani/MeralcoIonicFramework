angular.module('starter.Apply_NewRequest', ['ionic'])

.controller('ApplyNewRequestCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicScrollDelegate,crudservice,$ionicPopup) {

    // Exit app
    $scope.exit = function () {
    ionic.Platform.exitApp();
    }

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('app.main');
  };

  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };

  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };


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
    window.sessionStorage.setItem("apptype",item.text);
  };

  $scope.rateclassChange =
  function(item){
    console.log("rateclass selected text:", item.text, "selected value", item.value);
    window.sessionStorage.setItem("rateclass",item.text);
  };

  $scope.servicerequest={};
  $scope.submit=function()
  {
    console.log(document.getElementById('service_id').value);
    // alert(user.units);
  crudservice.create({
      service_id: document.getElementById('service_id').value,
      first_name: document.getElementById('first_name').value,
      middle_name: document.getElementById('middle_name').value,
      last_name: document.getElementById('last_name').value,
      birthdate: document.getElementById('birthdate').value,
      contact_number: document.getElementById('contact_number').value,
      cp_no: document.getElementById('cp_no').value,
      email: document.getElementById('email').value,
      house_number: document.getElementById('house_number').value,
      street: document.getElementById('street').value,
      barangay: document.getElementById('barangay').value,
      city: document.getElementById('city').value,
      landmark: document.getElementById('landmark').value,
      remarks: document.getElementById('remarks').value,
      units: document.getElementById('units').value,
      rateclass: window.sessionStorage.getItem("rateclass"),
      applicationtype: window.sessionStorage.getItem("apptype")

    }).success(function(data)
  {
    $ionicPopup.alert({
      title: "Service application request successfully saved."
    });
  });
  }


});

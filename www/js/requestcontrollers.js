angular.module('starter.requestcontrollers', [])

.controller('RequestCtrl', function($scope) {

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
  }


});

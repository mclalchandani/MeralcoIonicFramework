angular.module('starter.Apply_NewRequest', ['ionic'])

.controller('ApplyNewRequestCtrl', function($scope, $state,
  $ionicSlideBoxDelegate, $ionicScrollDelegate,crudservice,$ionicPopup,
  $ionicModal, $compile, $ionicLoading, $timeout, $cordovaCamera, $ionicActionSheet
  ) {
  
  
    $scope.userLoggedIn=function(){
     return window.sessionStorage.getItem("loggedIn") != null;
    }

    // Exit app
    $scope.exit = function () {
    $state.go('app.main')

    }
    
   if (!$scope.userLoggedIn()) {
        $state.go('app.main');
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
    //console.log(document.getElementById('first_name').value);
    //$scope.change_busy_caption("Saving...");
    //$scope.show_busy();

    // alert(user.units);
  crudservice.create({
      //service_id: document.getElementById('service_id').value,
      username: window.sessionStorage.getItem("userName"),
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
    //$scope.close_busy();
    $ionicPopup.alert({
      title: "Service application request successfully saved."
    });
  });
  }

  $scope.attachImage=function(documentType)
  {
      console.log("Inside attach image");
      console.log("DOCUMENT TYPE = " + documentType);

      var source;
      switch(documentType)
      {
        case 0:
          source = Camera.PictureSourceType.CAMERA;
          break;
       case 1:
          source = Camera.PictureSourceType.PHOTOLIBRARY;
          break;
      }


      var options = {
          quality : 75,
          destinationType : Camera.DestinationType.DATA_URL,
          sourceType : source,
          allowEdit : true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 300,
          targetHeight: 300,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
          //$scope.imgURI = "data:image/jpeg;base64," + imageData;
          //icon ion-checkmark-circled ed-done
          alert(imageData);
      }, function(err) {
          // An error occured. Show a message to the user
      });
  }

  $scope.selectImageSource=function()
  {
      console.log("Inside select image source");

      $scope.hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '<h1 class="sectiontitle">Camera</hi>' },
        { text: '<h1 class="sectiontitle">Gallery</h1>' }
      ],
      titleText: '<h1 class="sectiontitle">Select Source</h1>',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.attachImage(index);
      }
    });

  }

});

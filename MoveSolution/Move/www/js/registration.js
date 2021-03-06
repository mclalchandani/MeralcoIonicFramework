angular.module('starter.registration', ['ionic'])

.controller('RegistrationController', function($scope, $state, $ionicModal, $cordovaToast, registrationService)
{

	// Exit app
    $scope.exit=function () 
    {
    	console.log("inside exit");
    	$scope.modal.hide();
    }

	//Load login modal upon loading the controller
	$scope.register=function(){

	$ionicModal.fromTemplateUrl('templates/register.html', function(modal) 
	{
		$scope.registerLoaded = true;
		$scope.modal = modal;
		$scope.modal.show();
		 },
		 {
			    scope: $scope,
			    animation: 'slide-in-up'
		 })}
	
	$scope.processRegister=function()
	{
		var data = $scope.User;
		console.log("SCOPE= " + data);
		var result = registrationService.registerUser(data);
		
		if(result == 'success')
		{
			$scope.exit();
			window.sessionStorage.setItem("loggedIn", 'true');
			window.sessionStorage.setItem("userName",data.userName);
			
			$cordovaToast.show('Registration successful', 'long', 'bottom').then(function(success) 
			{
		      // success
		    }, function (error) {
		      // error
		    })
		}
	}



});

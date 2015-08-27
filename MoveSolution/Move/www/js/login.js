
angular.module('starter.logincontrollers', [])
.controller('LoginController',
	function ($scope, $ionicModal, $compile, $ionicLoading, $timeout, $ionicPopup, $state)
	{
    	$scope.login = {
	    	username: '',
	    	password: ''
	    };

		console.log("LoginController");
		$scope.dashboardCache = ""
		$scope.userID = null;
		$scope.displayName = "";
		$scope.sin_serials = [];
		$scope.errorLoginMsg=null;
		$scope.loginLoaded = false;
		$scope.form = null;
		$scope.hidenavbarButton=false;


		//Shake form elements when form has an error
		$scope.error_shake = function(){
			angular.element('#account_name_user').velocity("custom.shake", 900);
			angular.element('#password_user').velocity("custom.shake", 900);
		}
		
		
		// Exit app
	    $scope.exit=function () 
	    {
	    	console.log("inside exit");
	    	$scope.modal.hide();
	    }

		//Load login modal upon loading the controller
		$scope.LoginShow=function(){

		$ionicModal.fromTemplateUrl('templates/login.html', function(modal) {
			$scope.loginLoaded = true;
			$scope.modal = modal;
			$scope.modal.show();
			 },
			 {
				    scope: $scope,
				    animation: 'slide-in-up'
			 })}


		$scope.Logout = function(){
			$scope.login = {
		    	username: '',
		    	password: ''
		    },
			$scope.modal.hide();
			$scope.dashboardCache = "";
			angular.element('#db_page_cards').html("")
			console.log("logout");
		}

		$scope.loginOffline = function () {
			// $scope.change_busy_caption("Signing In");
			// $scope.show_busy();

	    	loginResult = {"isSuccessful":true,"name":"My Admin","uID":1,"success":"true"}

			if(loginResult.success == "true" || !settings.user_authentication){
	    		console.log("[LOGIN] " + loginResult.uID + " logged in");
	    		$scope.userID = loginResult.uID;
	    		$scope.SIN = loginResult.SIN;
	    		$scope.displayName = loginResult.name;
			    $scope.hidenavbarButton=false;

			    console.log($scope.loginData.username);
			    window.sessionStorage.setItem("loggedIn", 'true');



	    		//Show main page and close login modal upon successful login
	    		angular.element("#page").css("visibility","")
				// $scope.close_busy();
	    		$scope.modal.hide();
	    		var magicScope = angular.element($("#db_page")).scope();
	    		$state.go('app.main');


	    	}else{
	    		$scope.close_busy();
	    		var incorrect_popup = $ionicPopup.confirm({
	    			 template: "<style> .popup-buttons{display: none;} .popup-head { background-color: #ddd; border: 0px;}.popup-body{max-height: 0px; padding: 0px;} .popup-container .popup {border-radius: 5px; border: 1px solid #ddd;}</style>",
	    			 title: 'Incorrect Credentials',
	    		     buttons: [{
	    		    }]
	    		});
	    		$timeout(function() {
	    			 incorrect_popup.close();
	    		     $scope.error_shake();
	    		}, 1800);
	    	}
		}



		$scope.submitLogin = function(login_form)
		{
      console.log("submit");
			$scope.form = login_form;
			if(login_form.$valid){ //Check if form is valid
					$scope.change_busy_caption("Signing In");
					$scope.show_busy();

					WL.Client.connect(
							  {
								onSuccess: function(){
									//Create resource request to communicate with server adapters
									var resourceRequest = new WLResourceRequest(
										    settings.ip_override + "adapters/MoveSQLAdapter/login",
										    WLResourceRequest.POST
										);
									resourceRequest.setQueryParameter("params", "['" + login_form.username.$modelValue + "', '"+ login_form.password.$modelValue +"']");

									/*angular.element("#page").css("visibility","")
									$scope.close_busy();
						    		$scope.modal.hide();
						    		var magicScope = angular.element($("#db_page")).scope();
						    		magicScope.loadCards();*/

									//Send resource request
									resourceRequest.send().then(
										    function(result){

										    	loginResult = JSON.parse(result.responseText);

										    	//Check if login credentials are valid from server response
										    	if(loginResult.success == "true" || !settings.user_authentication){
										    		console.log("[LOGIN] " + loginResult.uID + " logged in");
										    		$scope.userID = loginResult.uID;
										    		$scope.SIN = loginResult.SIN;
										    		$scope.displayName = loginResult.name;

										    		//Show main page and close login modal upon successful login
										    		angular.element("#page").css("visibility","")
													$scope.close_busy();
										    		$scope.modal.hide();
										    		var magicScope = angular.element($("#db_page")).scope();
										    		magicScope.loadCards();

										    	}else{
										    		$scope.close_busy();
										    		var incorrect_popup = $ionicPopup.confirm({
								    	    			 template: "<style> .popup-buttons{display: none;} .popup-head { background-color: #ddd; border: 0px;}.popup-body{max-height: 0px; padding: 0px;} .popup-container .popup {border-radius: 5px; border: 1px solid #ddd;}</style>",
								    	    			 title: 'Incorrect Credentials',
								    	    		     buttons: [{
								    	    		    }]
								    	    		});
										    		$timeout(function() {
										    			 incorrect_popup.close();
										    		     $scope.error_shake();
										    		}, 1800);
										    	}
										    },

										    function(result){
										    	$scope.close_busy();
										    	var connect_popup = $ionicPopup.confirm({
							    	    			 template: "<style> .popup-buttons{display: none;} .popup-head { background-color: #ddd; border: 0px;}.popup-body{max-height: 0px; padding: 0px;} .popup-container .popup {border-radius: 5px; border: 1px solid #ddd;}</style>",
							    	    			 title: 'Error Connecting To Server',
							    	    		     buttons: [{
							    	    		    }]
							    	    		});
									    		$timeout(function() {
									    			connect_popup.close();
									    		     $scope.error_shake();
									    		}, 1800);
										    }

										);
								},
								onFailure: function(){
									console.log("[ERROR] Cannot connect to MobileFirst")
								}
							  }
					);


			}
			else{
				console.log("[ERROR] Login Form Invalid")
				$scope.error_shake();
			}
		};

	}
);

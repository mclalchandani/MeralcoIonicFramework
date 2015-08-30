angular.module('starter.services', [])

.factory('crudservice',

		function crudservice($http, $q) {
			var baseUrl = 'http://move-ws.cfapps.io/service-application/';
			return {
				getservAll : function() {
					return $http.get(baseUrl + 'get-all');
				},
				getservbyId : function(username) {
					return $http.get(baseUrl + 'get?username='
							+ username)
				},
				create : function(servicerequest) {
					console.log(servicerequest);
					return $http
							.post(
									baseUrl + 'new',
									servicerequest,
									{
										headers : {
											'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;'
										}
									});
				}
			}
		})

.factory('registrationService',

		function registrationService($http, $q) {
		
			var baseUrl = 'http://move-ws.cfapps.io/register/';
			var loginUrl = 'http://move-ws.cfapps.io/oauth/token';
			
		
			return {
				registerUser : function(userRequest) {
					console.log("INSIDE SERVICE " + userRequest);
					 return $http
							.post(
									baseUrl,
									userRequest,
									{
										headers : {
											'Content-Type' : 'application/json'
										}
									});
					
				},
				
				
				login: function(userRequest) {
				
									
				  $http({
                    method: 'POST',
                    url: 'http://move-ws.cfapps.io/oauth/token',
                    data: 'grant_type=password&scope=read+write&client_secret=123456&client_id=clientapp&username=1&password=1',
                    headers: {'Content-Type' : 'application/x-www-form-urlencoded','Authorization': 'Basic Y2xpZW50YXBwOjEyMzQ1Ng==', 'Accept' : 'application/json'},
                    withCredentials: true
                  }).success(function(data){
                    alert("success");
                  }).error(function(){
                     alert("error");
                  });
			   }
			
			  
			   
			
			}
		
		})
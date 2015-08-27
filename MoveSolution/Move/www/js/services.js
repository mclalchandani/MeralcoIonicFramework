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
		
			var baseUrl = '';
		
			return {
				registerUser : function(servicerequest) {
					console.log("INSIDE SERVICE " + servicerequest.name);
					return 'success';
				}
			}
		
		})
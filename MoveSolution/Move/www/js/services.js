angular.module('starter.services', []).factory('crudservice', ['$http','$q',crudservice])
function crudservice($http,$q)
{
var baseUrl = 'http://move-ws.cfapps.io/service-application/';
return{
  getservAll: function() {
      return $http.get(baseUrl+'get-all');
    },
  getservbyId: function(username) {
      return $http.get(baseUrl+'get?username=' + username)
        },
  create: function(servicerequest) {
    console.log(servicerequest);
    return $http.post(baseUrl+'new',servicerequest,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
            }
        });
  }
}
}













// angular.module('starter.service',[])
// .factory('crudservice',function($http)
// {
//   var baseUrl='http://herudi-sahimar.16mb.com/simplecrud/';
//   return
//   {
//     getAll = function() {
//       return $http.get(baseUrl+'select.php');
//     };
//
//     create = function(servicerequest)
//     {
//
//       return $http.post(baseUrl+'insert.php',servicerequest,{
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
//           });
//     }};
//
//
// }
// })
//



// ,
// create = function(servicerequest)
// {
//
//   return $http.post(baseUrl+'insert.php',servicerequest,{
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
//       });
// }},
// delete = function(id)
// {
//   return $http.get(baseUrl+'delete.php?id='+id);
// },
// update = function(servicerequest)
// {
//   return $http.post(baseUrl+'update.php',servicerequest,{
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
//       }
//   })
//
// };



// .factory('firebasedb',function($http)
// {
// var ref = new Firebase("https://burning-inferno-5169.firebaseio.com/");
// function()
//   {
//     var usersRef = ref.child("users");
//     usersRef.set({
//       alanisawesome: {
//         date_of_birth: "June 23, 1912",
//         full_name: "Alan Turing"
//       },
//       gracehop: {
//         date_of_birth: "December 9, 1906",
//         full_name: "Grace Hopper"
//       }
//     });
//
//   }
// )};
// })

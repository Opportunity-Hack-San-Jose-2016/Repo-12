/**
 * New node file
 */
var app =  angular.module('signUpApp',[]);
app.controller('signUpController',function($scope,$http){
    $scope.signUp = function (){
	        $http({
	            method : "POST",
	            data :{
	                "firstName" : $scope.firstName,
	                "lastName" : $scope.lastName,
	                "email" : $scope.email,
	                "password" : $scope.password
	            },
	            url : '/signUpAsVolunteer'
	        }).success(function (data) {
	        	if (data.statusCode === 401) {
	                window.location.assign("/");
	            } else {
	                window.location.assign("/logIn");
	            }
	        }).error(function (error){
	
	        });
	    };
});

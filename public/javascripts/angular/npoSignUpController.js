/**
 * New node file
 */
var app =  angular.module('npoSignUpApp',[]);
app.controller('npoSignUpController',function($scope,$http){
    $scope.signUp = function (){
	        $http({
	            method : "POST",
	            data :{
	                "orgName" : $scope.orgName,
	                "orgType" : $scope.orgType,
	                "email" : $scope.email,
	                "password" : $scope.password,
	                "startDate" : $scope.startDate,
	                "location" : $scope.location
	            },
	            url : '/signUpAsNPO'
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

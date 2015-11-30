'use strict';

myApp.controller('EventController', function EventController($scope){
	
	// TODO :  Get this from server later on
	$scope.event = {
		name : "Jiya's Birthday Party",
		date : '24/11/2015',
		time : '7:00 PM',
		venue: 'Hyderabad, India'
	};
	
});
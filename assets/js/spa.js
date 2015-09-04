angular.module('platzi', []);

// Fake emoji
angular.module('platzi')
	.controller('BaseCtrl', ['$scope', function($scope){
		
		io.socket.get('/emoji', function(data){
			$scope.emojis = data;
			$scope.$apply();
		});
		
		
		io.socket.on('emoji', function(event){
			switch (event.verb) {
				case 'created': 
					$scope.emojis.push(event.data);
					$scope.$apply();
					break;
			}	
		});
		
		// $scope.things = [
		// {
		// 	id: 232132132,
		// 	text: '=)'
		// },
		// {
		// 	id: 232132142,
		// 	text: ':)'
		// },
		// {
		// 	id: 232132152,
		// 	text: ';)'
		// },
		// {
		// 	id: 232132162,
		// 	text: ';0)'
		// }];
	}]);
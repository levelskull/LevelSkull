angular.module('blogApp', []).controller('blogCtrl', function ($scope, $http) {
	$scope.site = null;
	
	
	$scope.getSite = function()
	{
		$http({
			method: 'GET',
			url:'https://dl.dropboxusercontent.com/u/22513949/LevelSkull.txt'
		}).success(function (rs)
		{
			$scope.site = rs;
			
		}
		)
	}
	
	$scope.getSite();	
});
var app = angular.module('app', [
	'ngRoute', 'app.controllers'
])
	.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {templateUrl: 'partials/home.html', controller: 'PageController'})
           // .when('/page/:id', {templateUrl: 'views/page.html', controller: 'PageController'})
	.when('/page/0', {templateUrl: 'partials/rock.html', controller: 'PageController'})
	.when('/page/1', {templateUrl: 'partials/ice.html', controller: 'PageController'})
	.when('/page/2', {templateUrl: 'partials/racing.html', controller: 'PageController'})
	.when('/page/3', {templateUrl: 'partials/mountains.html', controller: 'PageController'})
	.when('/page/4', {templateUrl: 'partials/offroading.html', controller: 'PageController'})
	.when('/page/5', {templateUrl: 'partials/other.html', controller: 'PageController'})
	.when('/page/6', {templateUrl: 'views/post.html', controller: 'PostController'})
	.when('/post/:id', {templateUrl: 'views/singlepost.html', controller: 'SinglePostController'})
	.when('/climbers/1', {templateUrl: 'partials/1.html', controller: 'PageController'})
	.when('/climbers/2', {templateUrl: 'partials/2.html', controller: 'PageController'})
	.when('/climbers/3', {templateUrl: 'partials/3.html', controller: 'PageController'})
	.when('/climbers/4', {templateUrl: 'partials/4.html', controller: 'PageController'})
	.otherwise({redirectTo: '/'});
}]);

	app.controller('ClimberListCtrl', ['$scope', '$http', function ($scope, $http) {
    		$http.get('data/climbers.json').success(function (data) {
        		$scope.climbers = data;
    		});
	}]);

	app.controller('climbersCtrl',['$scope', '$http', function($scope, $http) {
  		 $http.get("data/climbers_mysql.php")
   			.then(function (response) {$scope.names = response.data.records;});
	}]);

	app.controller('buttonCtrl', function ($scope) {
	    $scope.button1 = false;
	    $scope.toggle = function () {
	        $scope.button1 = !$scope.button1;
	    };
	});

	app.controller('pickCtrl', function ($scope) {
	    $scope.button1 = true;
	    $scope.test = function (pick) {
	        if ($scope.pick == 1) {
	            $scope.button1 = true;
	            $scope.button2 = false;
	            $scope.button3 = false;
	            $scope.button4 = false;
	            $scope.button5 = false;
	        }
	        else if ($scope.pick == 2) {
	            $scope.button1 = false;
	            $scope.button2 = true;
	            $scope.button3 = false;
	            $scope.button4 = false;
	            $scope.button5 = false;
	        }
	        else if ($scope.pick == 3) {
	            $scope.button1 = false;
	            $scope.button2 = false;
	            $scope.button3 = true;
	            $scope.button4 = false;
	            $scope.button5 = false;
	        }
	        else if ($scope.pick == 4) {
	            $scope.button1 = false;
	            $scope.button2 = false;
	            $scope.button3 = false;
	            $scope.button4 = true;
	            $scope.button5 = false;
	        }
	        else {
	            $scope.button1 = false;
	            $scope.button2 = false;
	            $scope.button3 = false;
	            $scope.button4 = false;
	            $scope.button5 = true;
	        }
	    };
	    });

	app.controller('title', function(){
	this.title = title;
});

var title = "Steve Adamson";

angular
    .module('myApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/placeholder.html',
                controller: 'PlaceholderCtrl'
            })
            .when('/details/:itemId', {
                templateUrl: '/views/card.html',
                controller: 'DetailCtrl'
            })
            .otherwise( {redirectTO: '/'} )
    })
    .controller('PlaceholderCtrl', function($scope){
        $scope.itemId = [];
        $scope.showAll = false
    })
    .controller('DetailCtrl', function($scope, $routeParams, $http){
        $scope.itemId = $routeParams.itemId
        $http
            .get('/data/books.json')
            .then(function(res){
                $scope.book = res.data.filter(function(row){
                    return row.id === $scope.itemId
                })[0]
            })
    })
    .controller('AllDetailCtrl', function($scope, $routeParams, $http){
        $scope.itemId = $routeParams.itemId
        $scope.showAll = true
        $http
            .get('/data/books.json')
            .then(function(res){
                $scope.book = res.data
            })
    })
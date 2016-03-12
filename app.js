var websiteApp = angular.module('websiteApp', ['ngRoute']);

websiteApp.config(function($httpProvider) {
    $httpProvider.defaults.cache = true;
});

websiteApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        }).
        when('/projects', {
            templateUrl: 'partials/projects.html',
            controller: 'projectsController'
        }).
        when('/posts', {
            templateUrl: 'partials/posts.html',
            controller: 'postsController'
        }).
        otherwise({
            redirectTo: '/'
        });
});

websiteApp.controller('aboutController', function($scope) {
    $scope.name      = 'About';
    
    $scope.uiuc      = 'http://illinois.edu'
    $scope.csuiuc    = 'http://cs.illinois.edu';
    $scope.goodreads = 'https://www.goodreads.com/harshays'

    $scope.akuna     = 'http://www.akunacapital.com';
    $scope.timan     = 'http://sifaka.cs.uiuc.edu/ir/index.html';
    
    $scope.email     = 'hrshah4@illinois.edu';
    $scope.github    = 'http://www.github.com/harshays';
    $scope.linkedin  = 'http://www.linkedin.com/in/harshayshah';
});

websiteApp.controller('projectsController', function($scope) {
    $scope.name = "Projects";
});

websiteApp.controller('postsController', function($scope) {
    $scope.name = "Posts"
});




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

websiteApp.service('utils', function() {
    this.shuffle = function(arr) {
        var counter = arr.length;
        while (counter > 0) {
            var index = Math.floor(Math.random() * counter);
            counter--;
            var temp = arr[counter];
            arr[counter] = arr[index];
            arr[index] = temp;
        }
        return arr;
    };
});

websiteApp.filter('slice', function() {
    return function(arr, start, end) {
        return arr.slice(start, end);
    }
});

websiteApp.controller('bodyController', function($scope) {
    $scope.email     = 'hrshah4@illinois.edu';
    $scope.github    = 'http://www.github.com/harshays';
    $scope.linkedin  = 'http://www.linkedin.com/in/harshayshah';
    $scope.twitter   = 'http://www.twitter.com/Harshay11';
});

websiteApp.controller('aboutController', function($scope) {
    $scope.uiuc      = 'http://illinois.edu'
    $scope.csuiuc    = 'http://cs.illinois.edu';
    $scope.goodreads = 'https://www.goodreads.com/harshays'
    $scope.akuna     = 'http://www.akunacapital.com';
    $scope.timan     = 'http://sifaka.cs.uiuc.edu/ir/index.html';
});

websiteApp.controller('projectsController', function($scope, utils) {
    $scope.projects = utils.shuffle([
        ["Jot", "Python CLI to track information and log events", "https://github.com/harshays/jot"],
        ["Clean", "Python CLI to clean and categorize folders", "https://github.com/harshays/clean"],
        ["PyUIUC", "Python API wrapper for UIUC courses", "https://github.com/harshays/pyuiuc"],
        ["Southwest", "Python Utility to schedule southwest check-ins", "https://github.com/harshays/southwest"],
        ["Prioritize", "Task management web application. Built with Flask", "https://github.com/harshays/prioritize"],
    ]);

});

websiteApp.controller('postsController', function($scope, utils) {
    $scope.interests = utils.shuffle(["statistics", "exploratory data analysis", "data visualizations",
                                      "kaggle submissions", "machine learning"]);
    $scope.end = $scope.interests.length - 1;
});



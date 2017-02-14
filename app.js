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

    this.toggleActiveNav = function(route) {
        $('.nav-li').find('a').removeClass('active-nav-li');
        $("[nav='"+route+"']").find('a').addClass('active-nav-li');
    }
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
    $scope.uiuc      = 'http://illinois.edu';
    $scope.csuiuc    = 'http://cs.illinois.edu';
    $scope.goodreads = 'https://www.goodreads.com/harshays';
    $scope.akuna     = 'http://www.akunacapital.com';
    $scope.timan     = 'http://sifaka.cs.uiuc.edu/ir/index.html';
    $scope.crowd     = 'http://sundaram.cs.illinois.edu/';
    $scope.networks  = 'https://en.wikipedia.org/wiki/Complex_network'
});

websiteApp.controller('projectsController', function($scope, utils) {
    $scope.projects = utils.shuffle([
        ["jot", "utility to track information and log events", "https://github.com/harshays/jot"],
        ["clean", "utility to clean and categorize folders", "https://github.com/harshays/clean"],
        ["pyuiuc", "python api wrapper for UIUC courses", "https://github.com/harshays/pyuiuc"],
        ["southwest", "python utility to schedule southwest check-ins", "https://github.com/harshays/southwest"],
        ["prioritize", "task management web app", "https://github.com/harshays/prioritize"],
        ["papers", "reviews and/or summaries of papers", "https://github.com/harshays/papers"],
    ]);

});

websiteApp.controller('postsController', function($scope, utils) {
    $scope.interests = utils.shuffle(["inferential statistics", "exploratory data analysis", "data visualization",
                                      "network science & data mining", "machine learning"]);
    $scope.end = $scope.interests.length - 1;
});

websiteApp.run(function($rootScope, $location, $route, utils) {
    $rootScope.$on('$routeChangeSuccess', function() {
        var loc   = $location.path().substring(1);
        var route = (loc == "") ? "about" : loc;
        utils.toggleActiveNav(route);
    });
});


$(document).ready(function() {
    $('body').hide().fadeIn();
});

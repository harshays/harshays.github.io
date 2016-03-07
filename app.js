websiteApp = angular.module('websiteApp', ['ngAnimate']);

websiteApp.config(function($httpProvider) {
    $httpProvider.defaults.cache = true;
});

websiteApp.factory('githubService', function($http) {
    return {
        url: 'https://api.github.com/users/harshays/repos?sort=pushed',
        get: function() {
            return $http
                .get(this.url)
                .then(function(resp) {
                    if (resp.statusText === "OK")
                        return resp.data;
                    return {};
            });
        }
    }
});

websiteApp.filter('repoFilter', function() {
    return function(repos) {
        var out = [];

        var repo_filter =
            ['moocs', 'harshays.gitub.io', 'website', 'hh-personal-sites', 'learn',
             'solutions', 'scripts', 'harshays.github.io', 'dotfiles', 'ios'];

        var fork_filter = ['phrase-mining'];

        angular.forEach(repos, function(repo) {
            var inFilter = repo_filter.indexOf(repo['name']) > -1;
            var inFork = fork_filter.indexOf(repo['name']) > -1;
            var isFork = repo['fork'];

            if (inFilter || (isFork && !inFork))
                return;

            out.push({
                'name': repo['name'],
                'url': repo['homepage'] || repo['html_url'],
                'description': repo['description']
            });
        });

        return out;
    };
});

websiteApp.controller('contentCtrl', function($scope) {
    $scope.uiuc     = 'http://cs.illinois.edu';
    $scope.akuna    = 'http://www.akunacapital.com';
    $scope.timan    = 'http://sifaka.cs.uiuc.edu/ir/index.html';
    $scope.email    = 'hrshah4@illinois.edu';
    $scope.github   = 'http://www.github.com/harshays';
    $scope.linkedin = 'http://www.linkedin.com/in/harshayshah';
    $scope.facebook = 'http://www.facebook.com/harshay.shah';
});

websiteApp.controller('projectsCtrl', function($scope, $filter, githubService) {
    githubService.get().then(function(data) {
        $scope.data = $filter('repoFilter')(data);
    });
});

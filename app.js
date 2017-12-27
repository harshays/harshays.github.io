var websiteApp = angular.module('websiteApp', ['ngRoute']);

websiteApp.service('utils', function() {
    this.toggleActiveNav = function(route) {
        $('.nav-li').find('a').removeClass('active-nav-li');
        $("[nav='"+route+"']").find('a').addClass('active-nav-li');
    }
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
/**
 * Created by kaya on 11/26/16.
 */
angular.module('flapperNews', ['ui.router']);//include external lib called 'ui.router'
app.factory('post', [function(){
    //create a new object having array property called posts
    var object = {
        posts:[]
    }
    return object;
}]);

//inject the service
app.controller('MainCtrl', ['$scope', 'posts', function ($scope, posts) {
    //Bind the $scope.posts variable in our controller to the posts array in our service:
    $scope.posts = posts.posts;
}]);
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider){
        //set up home route
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'//new state should called by MainCtrl
        });
        $urlRouterProvider.otherwise('home');

    }]);//app.config

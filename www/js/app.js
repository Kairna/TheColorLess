angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider


         //   first state is sign in

            .state('signin',{
                url: "/sign-in",
                templateUrl:'templates/sign-in.html',
                controller:'SignInCtrl'
            })
         //   all the middle states here

            // this wrap the entire view port
            .state('main', {
                url: "/main",
                abstract: true,
                templateUrl: "templates/event-menu.html"
            })

            // we begin from this view.
            .state('main.home', {
                url: "/home",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/home.html"
                    }
                }
            })

            .state('main.home.chattab', {
                url: "/chattab",
                views: {
                    'chat-tab' :{
                        templateUrl: "templates/chat-tab.html",
                        controller: "MainCtrl"
                    }
                }
            })
            .state('main.home.threadtab', {
                url: "/threadtab",
                views: {
                    'thread-tab' :{
                        templateUrl: "templates/thread-tab.html",
                        controller: "MainCtrl"
                    }
                }
            })
            .state('main.home.pmtab', {
                url: "/pmtab",
                views: {
                    'pm-tab' :{
                        templateUrl: "templates/pm-tab.html",
                        controller: "MainCtrl"
                    }
                }
            })


            // TODO making more state

            /** Not done yet
            .state('signout',{
                url: "/sign-out",
                templateUrl:'templates/sign-out.html',
                controller:'SignInCtrl'
            })
            */
        $urlRouterProvider.otherwise("/sign-in");
    })


    .controller('SignInCtrl', function($scope, $state) {
        $scope.signIn = function(user) {
            console.log('Sign-In', user);
            $state.go('main.home');
        };
    })




    .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {


       /** $scope.toogleRight = function() {
            $ionicSideMenuDelegate.toogleRight();
        };*/
    })


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

            // TODO making more state

            .state('main.checkin', {
                url: "/check-in",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/check-in.html",
                        controller: "CheckinCtrl"
                    }
                }
            })
            .state('main.attendees', {
                url: "/attendees",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/attendees.html",
                        controller: "AttendeesCtrl"
                    }
                }
            })
            /** Not done yet
            .state('signout',{
                url: "/sign-out",
                templateUrl:'templates/sign-out.html',
                controller:'SignInCtrl'
            })
            */
        $urlRouterProvider.otherwise("/sign-in");
    })


    .controller('SignInCtrl', function($scope, $state, $http) {

        $scope.signIn = function(user) {
            console.log('Sign-In', user.username);
            var params = new Object();
//----------API CALL----------------:
            $http.post("https://guarded-oasis-2979.herokuapp.com/login", user)
            .success(function(response, status){
                var result = response.results;
                if (result.success == true){
                    console.log(result.status)
                    $state.go('main.home');
                }
                else{
                // some error trapping here :) incorrect password/incorrect username. username check takes place first
                    console.log(result.status)
                }
            })
            .error(function(error, status){
                // internal error, no input was made
            })
//----------END API CALL------------:
        };
    })




    .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {


       /** $scope.toogleRight = function() {
            $ionicSideMenuDelegate.toogleRight();
        };*/
    })

    .controller('CheckinCtrl', function($scope) {


    })

    .controller('AttendeesCtrl', function($scope) {



    });
angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider


         //   first state is sign in

            .state('signin',{
                url: "/sign-in",
                templateUrl:'templates/sign-in.html',
                controller:'SignInCtrl'
            })

            // TODO
            .state('main', {
                url: "/main",
                abstract: true,
                templateUrl: "templates/event-menu.html"
            })
            .state('main.home', {
                url: "/home",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/home.html"
                    }
                }
            })
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

        $urlRouterProvider.otherwise("/sign-in");
    })


    .controller('SignInCtrl', function($scope, $state) {
        $scope.signIn = function(user) {
            console.log('Sign-In', user);
            $state.go('main.home');
        };
    })
















    .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
        $scope.attendees = [
            { firstname: 'Nicolas', lastname: 'Cage' },
            { firstname: 'Jean-Claude', lastname: 'Van Damme' },
            { firstname: 'Keanu', lastname: 'Reeves' },
            { firstname: 'Steven', lastname: 'Seagal' }
        ];

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })

    .controller('CheckinCtrl', function($scope) {
        $scope.showForm = true;

        $scope.shirtSizes = [
            { text: 'Large', value: 'L' },
            { text: 'Medium', value: 'M' },
            { text: 'Small', value: 'S' }
        ];

        $scope.attendee = {};
        $scope.submit = function() {
            if(!$scope.attendee.firstname) {
                alert('Info required');
                return;
            }
            $scope.showForm = false;
            $scope.attendees.push($scope.attendee);
        };

    })

    .controller('AttendeesCtrl', function($scope) {

        $scope.activity = [];
        $scope.arrivedChange = function(attendee) {
            var msg = attendee.firstname + ' ' + attendee.lastname;
            msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
            msg += new Date().getMilliseconds();
            $scope.activity.push(msg);
            if($scope.activity.length > 3) {
                $scope.activity.splice(0, 1);
            }
        };

    });
'use strict';

angular.module('muscleFlow_App', ['ui.router','ngAnimate'




]).config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){

              $urlRouterProvider.otherwise('/');


                      $stateProvider

                                    .state('/',{

                                       url:'/',
                                       templateUrl:'templates/main.html',
                                       controller:'mainCtrl'



                                    })

                                    .state('company',{

                                        url:'/company',
                                        templateUrl:'scripts/company/abCompany.html',
                                        controller:'companyCtrl'



                                    })
                                    .state('schedule',{

                                        url:'/schedule',
                                        templateUrl:'templates/schedule.html',
                                        controller:'scheduleCtrl'



                                    })





    }]);

/**
 * Created by pure coder on 3/19/14.
 */

angular.module('muscleFlow_App')
    .controller('mainCtrl',['$scope','parallaxHelper',function($scope,parallaxHelper){

      $scope.background = parallaxHelper.createAnimator(-0.3,150,-150);


     $scope.header = "Muscle Flow Systems";


    }]);

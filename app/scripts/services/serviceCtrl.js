/**
 * Created by pure coder on 4/9/2014.
 */
angular.module('muscleFlow_App')

          .controller('serviceCtrl',['$scope','parallaxHelper',function($scope, parallaxHelper){

          $scope.header = "Services";
          $scope.backgrounds = parallaxHelper.createAnimator(-0.3,150,-150);

    }]);
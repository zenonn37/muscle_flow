/**
 * Created by pure coder on 4/2/2014.
 */

angular.module('muscleFlow_App')
    .controller('companyCtrl',['$scope',function($scope){

    $scope.header = "Muscle Flow Systems";

        //$scope.company = true;
        $scope.terry = false;
        $scope.debbie = false;
        $scope.trainer2 = false;


        //view function
     $scope.aboutComp = function(){

         //$scope.company = true;
         $scope.terry = false;
         $scope.showSecret = 4;




     }


        $scope.terryBio = function(){

            $scope.terry = true;
            $scope.company = false;
            $scope.showSecret = 1;


        }

        $scope.debbieBio = function(){

            $scope.showSecret = 2;


        }

        $scope.trainer_2Bio = function(){

            $scope.showSecret = 3;


        }

      //$scope.company();

    }]);

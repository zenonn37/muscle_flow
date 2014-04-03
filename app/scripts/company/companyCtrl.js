/**
 * Created by pure coder on 4/2/2014.
 */

angular.module('muscleFlow_App')
    .controller('companyCtrl',['$scope',function($scope){

    $scope.comp = "Muscle Flow Training Systems";
    $scope.deb = "Debbie Pederson";
    $scope.terry = "Terry Pittman";
    $scope.trainer = "Trainer 3";

        //$scope.company = true;



        //view function
     $scope.aboutComp = function(){

         //$scope.company = true;
         $scope.pageClass = 'company-page'
         $scope.showSecret = 4;




     }


        $scope.terryBio = function(){

            $scope.pageClass = 'terry-page'
            $scope.showSecret = 1;


        }

        $scope.debbieBio = function(){

            $scope.pageClass = 'debbie-page'

            $scope.showSecret = 2;


        }

        $scope.trainer_2Bio = function(){

            $scope.pageClass = 'trainer-page'

            $scope.showSecret = 3;


        }

      //$scope.company();

    }]);

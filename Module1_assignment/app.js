(function (){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunchitems = "";
    $scope.result = "";
    $scope.showlunchitems = function(){
      console.log($scope.lunchitems);
      var numberOfLunchItems = getTotalNumberOfLunchItems($scope.lunchitems);
      // console.log("number of items " + numberOfLunchItems);
      checkIfTooManyLunchItems(numberOfLunchItems);
    }

    function getTotalNumberOfLunchItems(lunchString){
      var lunchString = lunchString.split(',');
      // console.log(lunchString);
      return lunchString.length;
    }

    function checkIfTooManyLunchItems(numberOfItems){
      var num = numberOfItems;
      if(num>1 && num<=3){
        $scope.result = "Enjoy!"
      }
      else if(num > 3){
        $scope.result = "Too much!!"
      }
      else if(num == 1){
        if($scope.lunchitems == ""){
          $scope.result = "Please enter data first."
        }
        else{
          $scope.result = "Enjoy!"
        }
      }
    }
  }
})();

angular.module('palindromeChecker', [])
.controller('MainCtrl', ['$scope',function($scope){
  $scope.words = [  ];
  $scope.addWord = function(){
    if(!$scope.title || $scope.title === '') { return; }
    
    $scope.title2 =       $scope.title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    
    $scope.reversed = $scope.title2.split("").reverse().join("");
    if($scope.title2 === $scope.reversed) {
      $scope.words.push({title: $scope.title, result: ' is a palindrome'});
      $scope.title = "";
    } else {
      $scope.words.push({title: $scope.title, result: ' is not a palindrome'});
      $scope.title = "";
    }
  };
}]);
angular.module('palindromeChecker', [])
.controller('MainCtrl', function($scope){  
  $scope.words = [  ];
  var isPalindrome = function(word) {
    let titleNorm = word.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    let titleRev = titleNorm.split("").reverse().join("");
    return (titleNorm === titleRev) ? true : false;
  };
  $scope.addWord = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.words.push({title: $scope.title, result: isPalindrome($scope.title) ? 'is a palindrome' : 'is not a palindrome'});
    $scope.title = "";
  };
})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  }
});
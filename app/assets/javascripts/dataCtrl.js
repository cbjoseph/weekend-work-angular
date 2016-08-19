(function() {
  angular.module('app').controller('dataCtrl', function($scope, $http) {
    $scope.setup = function() {
      $http.get('https://data.cityofchicago.org/resource/uh4d-zh38.json').then(function(response) {
        $scope.bikes = response.data;
      });
      $scope.changeStatus = function(inputBike) {
        inputBike.community_name = !inputBike.community_name;
      };
    };
  });
})();

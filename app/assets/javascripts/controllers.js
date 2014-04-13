
var BarleyBox = angular.module('BarleyBox', ['BarleyBoxFilters', 'ui.slider', 'ui.date']);
function Signup($scope) { 
}

function BeerSelector($scope) {
  $scope.beers = brews;
  $scope.abv_range=[0, 100];
  $scope.ibu_range=[0, 100];
  $scope.color_range=[0, 100];
}

angular.module('BarleyBoxFilters', [])
.filter('abv', function(){
  return function(beers, abv_range){
    if (!abv_range)return beers;
    return _.reject(beers, function(beer) { return !(beer.apv >= abv_range[0] && beer.apv <= abv_range[1]) });
  }
}).filter('ibu', function(){
  return function(beers, ibu_range){
    if (!ibu_range)return beers;
    return _.reject(beers, function(beer) { return !(beer.ibu >= ibu_range[0] && beer.ibu <= ibu_range[1]) });
  }
}).filter('colors', function(){
  return function(beers, color_range){
    if (!color_range)return beers;
    return _.reject(beers, function(beer) { return !(beer.srm >= color_range[0] && beer.srm <= color_range[1]) });
  }
});






var BarleyBox = angular.module('BarleyBox', ['BarleyBoxFilters', 'ui.slider', 'ui.date']);
BarleyBox.$inject = ['$scope', '$timeout', 'BarleyBoxFilters', 'ui.slider', 'ui.date'];
function Signup($scope) { 
}

function BeerSelector($scope) {
  $scope.beers = brews;
  $scope.breweries = breweries;
  $scope.abv_range=[0, 100];
  $scope.ibu_range=[0, 100];
  $scope.color_range=[0, 100];

  $scope.showDetail = function(beer){
    $("#beer-story").html(beer.story);
    $("#beer-name").html(beer.name);
    var brewery = _.first($scope.breweries, { 'name': beer.brewery });

    $("#brewery-story").html(brewery.hist);

    $("#dialog").dialog('open');
  }
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
}).filter('color_name', function(){
  return function(beer){
    if (beer.srm <=2)return "Light Yellow";
    if (beer.srm <=3)return "Medium Yellow";
    if (beer.srm <=4)return "Straw-Gold";
    if (beer.srm <=6)return "Deep-Gold";
    if (beer.srm <=3)return "Light Amber";
    if (beer.srm <=3)return "Copper Amber";
    if (beer.srm <=3)return "Straw-Gold";
    if (beer.srm <=3)return "Straw-Gold";
    if (beer.srm <=3)return "Straw-Gold";
    if (beer.srm <=3)return "Straw-Gold";
    if (beer.srm <=3)return "Straw-Gold";
    if (beer.srm <=3)return "Straw-Gold";
    if (!color_range)return beers;
    return _.reject(beers, function(beer) { return !(beer.srm >= color_range[0] && beer.srm <= color_range[1]) });
  }
});

2 Light Yellow
3 Medium Yellow
4 Straw-Gold
6 Deep Gold
8 Light Amber
10  Copper Amber
13  Amber Red-Brown
17  Light Brown
20  Medium Brown
24  Dark Brown
29  Midnight Black
35  Black
40  Dark Black




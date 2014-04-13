
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
    $("#beer-image").attr("src", "/assets/beers/"+beer.pic);
    var brew_index = _.findIndex($scope.breweries, function(brewery) { return brewery.name == beer.brewery; });
    if (brew_index){
      var brewery = $scope.breweries[brew_index];
      $("#brewery-story").html(brewery.hist);
    }

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
    if (beer.srm <=6)return "Deep Gold";
    if (beer.srm <=8)return "Light Amber";
    if (beer.srm <=10)return "Copper Amber";
    if (beer.srm <=13)return "Amber Red-Brown";
    if (beer.srm <=17)return "Light Brown";
    if (beer.srm <=20)return "Medium Brown";
    if (beer.srm <=24)return "Dark Brown";
    if (beer.srm <=29)return "Midnight Black";
    if (beer.srm <=35)return "Black";
    return "Dark Black";
  }
});

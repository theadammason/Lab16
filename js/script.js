var app = angular.module('myMod', []);

app.controller('getDate', function($scope){

  var temp = new Date();
  $scope.date = "Date: "+(temp.getMonth()+1)+'-'+(temp.getDate())+'-'+(temp.getFullYear());

});

app.directive('myDate', function(){
  return {
    replace: 'false',
    template: '<p ng-controller="getDate">{{date}}</>'
  };
});


app.directive('myNav', function(){
  return {
    replace: 'false',
    templateUrl: 'partials/nav.html'
  };
});
app.directive('myAds', function(){
  return {
    replace: 'false',
    templateUrl: 'partials/ads.html'
  };
});
app.directive('myNews', function(){
  return {
    replace: 'false',
    templateUrl: 'partials/news.html'
  };
});
app.directive('myIntro', function(){
  return {
    replace: 'false',
    templateUrl: 'partials/intro.html'
  };
});
app.directive('mySearch', function(){
  return {
    replace: 'false',
    templateUrl: 'partials/searchBox.html'
  };
});

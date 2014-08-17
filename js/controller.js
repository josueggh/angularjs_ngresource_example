function mainCtrl($scope, Movie){
  
  $scope.movies = Movie.get();
  $scope.singlemovie = Movie.read({ id : 1});

}
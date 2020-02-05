window.onload = function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        //loop: true,
        mousewheelControl: true,
      	paginationClickable: true,
      	keyboardControl: true,

        // If we need pagination
        pagination: '.swiper-pagination',

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
     })         
 };

angular.module('App', ['ionic'])
.controller('swiperCtrl', function($scope) {
  $scope.items = [{rank: "one"},{rank: "two"}, {rank: "three"}, {rank: "YOUPIIIIIIIIIIIIIIIIIII"}];
  $scope.showalert = function(rank) {
    alert("clicked "+rank);
  }
});
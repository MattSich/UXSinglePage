'use strict';

/**
 * @ngdoc function
 * @name designMicrositeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the designMicrositeApp
 */
angular.module('designMicrositeApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {

    $scope.goToHash = function(hasher){
      $location.hash(hasher);
      $anchorScroll();
    };

    $scope.currentTime = function(location){

      var hourOffset = 0;
      if(location === 0){ //Fairfax
        hourOffset = -4;
      }else if(location === 1){//cluj
        hourOffset = 1;
      }
      var now = new Date();
      var timestamp = Date.UTC(now.getFullYear(),now.getMonth(), now.getDate() ,
      now.getHours() - hourOffset, now.getMinutes(), now.getSeconds(), now.getMilliseconds());

      var ampm = 'am';
      var date = new Date(timestamp);
      var hours = date.getHours();
      var minutes = '0' + date.getMinutes();

      if(hours > 12){
        hours -= 12;
        ampm = 'pm';
      }
      var formattedTime = hours + ':' + minutes.substr(-2) + ' ' + ampm;

      return formattedTime;
    };

    $scope.imageGroups = [
      {direction: 'right',
       images: [
         'http://www.fillmurray.com/500/500',
         'http://www.fillmurray.com/500/501',
         'http://www.fillmurray.com/500/502'
       ]
      },
      {direction: 'right',
       images: [
         'http://www.fillmurray.com/500/503',
         'http://www.fillmurray.com/500/504',
         'http://www.fillmurray.com/500/505'
       ]
      },
      {direction: 'left',
       images: [
         'http://www.fillmurray.com/500/506',
         'http://www.fillmurray.com/500/507',
         'http://www.fillmurray.com/500/508'
       ]
      },
      {direction: 'left',
       images: [
         'http://www.fillmurray.com/500/509',
         'http://www.fillmurray.com/500/510',
         'http://www.fillmurray.com/500/511'
       ]
      }
    ];
    $scope.sliders = [
      {
        image: 'http://www.fillmurray.com/500/520',
        subtitle: 'CONCEPT DEVELOPMENT',
        title: 'Imaging Geotourism',
        message: 'Nam dapibus nasl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Cras ut erat magna. Morbi nabh ante, condimentum vestibulum tempus a, tristique et velit.'
      },
      {
        image: 'http://www.fillmurray.com/500/521',
        subtitle: 'CONCEPT DEVELOPMENT',
        title: 'Imaging Geotourism',
        message: 'Nam dapibus nasl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Cras ut erat magna. Morbi nabh ante, condimentum vestibulum tempus a, tristique et velit.'
      },
      {
        image: 'http://www.fillmurray.com/500/522',
        subtitle: 'CONCEPT DEVELOPMENT',
        title: 'Imaging Geotourism',
        message: 'Nam dapibus nasl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Cras ut erat magna. Morbi nabh ante, condimentum vestibulum tempus a, tristique et velit.'
      }
    ];
    $scope.sliders2 = [
      {
        image: $scope.sliders[1].image
      },
      {
        image: $scope.sliders[2].image
      },
      {
        image: $scope.sliders[0].image
      }
    ];
    $scope.sliders3 = [
      {
        image: $scope.sliders[2].image
      },
      {
        image: $scope.sliders[0].image
      },
      {
        image: $scope.sliders[1].image
      }
    ];
  });

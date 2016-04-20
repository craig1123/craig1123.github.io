angular.module('portfolio')
.controller('contactCtrl', function ($scope, contactServ) {

  $scope.sendEmail = function(name, email, message) {
      if (!name) {
          alert('Please enter a name');
        }
      else if (!email) {
          alert('Please enter a valid email.');
        }
      else if (!message) {
          alert('Please enter a brief message.');
      }
      else if (name && email && message) {
            contactServ.sendEmail(name, email, message);
            $scope.email = '';
            $scope.name = '';
            $scope.message = '';
            alert('Your email has been sent!');
          }
      }





})

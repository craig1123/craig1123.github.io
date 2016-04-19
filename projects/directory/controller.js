angular.module("app3").controller("ctrl", function ($scope, serv) {


  $scope.people = serv.getData();

  $scope.addPeople = function (person) {
    person.contact = !person.contact //toggle
  }

  $scope.deletePeople = function (person) {
    myData.splice(person, 1);
  }

})

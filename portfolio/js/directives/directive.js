angular.module('portfolio')
  .directive("navBar", function () {
    return {
      restrict: "EA",
      templateUrl: "js/directives/navBar.html"
    }
  })
  .directive("workApp", function () {
    return {
      restrict: "EA",
      templateUrl: "js/directives/workApps.html"
    }
  })
  .directive("features", function () {
    return {
      restrict: "EA",
      templateUrl: "js/directives/features.html"
    }
  })

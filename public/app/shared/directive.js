angular.module('portfolio')
  .directive("navBar", function () {
    return {
      restrict: "EA",
      templateUrl: "navBar.html"
    };
  })
  .directive("workApp", function () {
    return {
      restrict: "EA",
      templateUrl: "workApps.html"
    };
  })
  .directive("features", function () {
    return {
      restrict: "EA",
      templateUrl: "features.html"
    };
  })
  .directive("foot", function () {
    return {
      restrict: "EA",
      templateUrl: "foot.html"
    };
  });

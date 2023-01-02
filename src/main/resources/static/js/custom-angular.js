var app = angular.module("schoolApp", []);
app.controller("myCtrl", function($scope, $http) {
//    $scope.products = ["Milk", "Bread", "Cheese"];

    $scope.contactUs = {};
    $scope.login={};

    $scope.contactUsForm = function () {

       $http.post('/enquiries', $scope.contactUs).then(function(){
            alert("Data saved successfully.");
            $scope.contactUs={};
            $scope.loginSuccessful=false;
       },
       function() {
            alert("Error occured while saving data.");
       }
       );
    };

    $scope.checkLogin = function () {
            if($scope.login.username == "rupinder" && $scope.login.password == "singh") {
                alert("Login Sucessful");
                $scope.loginSuccessful=true;

            } else {
                alert("Username and Password combination is incorrect.");
            }

        };

        $scope.$watch('loginSuccessful', function() {
                $http.get("/enquiries").then(function(response) {
                         $scope.enquiries = response.data;
                    });
            });

        console.log("custome angular loaded.");

});

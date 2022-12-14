let app = angular.module("myApp", [])
app.controller('control', function ($scope) {
    $scope.tarifa = 0
    $scope.horas = 0

    $scope.sueldoBasico = function(){
        return $scope.tarifa * $scope.horas
    }

    $scope.descuento = function(){
        let basico = $scope.sueldoBasico()
        let desc = 0
        if(basico < 501){
            desc = 0
        } else if (basico > 500 && basico < 1001){
            desc = 0.02
        } else if (basico > 100 && basico < 4001){
            desc = 0.08
        } else if (basico > 4000 && basico < 8001){
            desc = 0.15
        } else if (basico > 8000 && basico < 1001){
            desc = 0.21
        } else {
            desc = 0.3
        }
        return basico * desc
    }

    $scope.sueldoNeto = function () {
        let basico = $scope.sueldoBasico()
        let desc = $scope.descuento()
        
        return basico - desc

    }

})
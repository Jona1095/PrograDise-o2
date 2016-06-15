/**
 * Created by alejandro on 4/25/2016.
 */

'use strict';

angular.module('ASPStore')
    .controller('administradorCtrl',function ($scope, $location, $state, solicitudEstudianteService) {
        
        $scope.usuarioActual = solicitudEstudianteService;
        console.log($scope.usuarioActual);
        $scope.usuario = $scope.usuarioActual.usuario;
        
        $scope.salir = function (){
            
            $scope.usuarioActual = "";
            $state.go('solicitudEstudiante');
        };
    });

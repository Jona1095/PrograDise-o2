
'use strict';

angular.module('ASPStore').controller('solicitudEstudianteCtrl',function ($scope, $location, $http, $state, solicitudEstudianteService) {
        
    
    $scope.loginData = {};
    $scope.horarioData = {};
    $scope.solicitudData = {};
    $scope.usuarioActual = "";
    
    $scope.doLogin = function() {

        $http.post("http://localhost/backEndControlOperadores/public/login", $scope.loginData)

            .success(function(response) {
            if(response.usuario != null)
            {   
                $scope.usuarioActual = response;
                //console.log($scope.usuarioActual);
                
                solicitudEstudianteService.id = $scope.usuarioActual.id;
                solicitudEstudianteService.usuario = $scope.usuarioActual.usuario;
                solicitudEstudianteService.contrasena = $scope.usuarioActual.contrasena;
                //console.log(solicitudEstudianteService);
                //$location.url("/administrador");
                
                $state.go('administrador');
            }                       
            else
            {
                console.log('Usuario o contraseña incorrecta');
            }
        });
    };
    
    $scope.doSolicitud = function (){
        
        $scope.solicitudData.reporteMatricula = document.getElementById("fileFormulario").value;
        $http.post("http://localhost/backEndControlOperadores/public/CrearFormulario", $scope.solicitudData)

            .success(function(response) {
            
            $scope.horarioData.idOperador = response.id;
            console.log(response.id);
            $http.post("http://localhost/backEndControlOperadores/public/CrearHorarioDisponible", $scope.horarioData)

                .success(function(responseHorario) {
                console.log($scope.horarioData);
            });
        });
        
    };
    
    $scope.crearHorario = function (){
      
        console.log($scope.horarioData);
    };
});

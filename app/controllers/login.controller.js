angular.module('appModule')
    .controller('LoginController', loginController);

    
    function loginController($scope, $state, UserService) {

        localStorage.clear();

        $scope.carregarUser = carregarUser;

        function carregarUser(username) {   
            UserService.getUserData(username).then(
                function(data){
                    $scope.user = data;
                    $scope.userImg = data.avatar_url;
                }
            )
            
            localStorage.setItem("Username", $scope.username);
            $state.go('home.tarefas')
        }

        // $scope.goProfile = function() {
        //     localStorage.setItem("name", $scope.name);
        //     localStorage.setItem("senha", $scope.senha);
        //     $state.go('home.profile', {name: 0, senha: 0})
        //  }

       
    };

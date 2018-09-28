angular.module('appModule')
    .controller('HomeController',['$scope', homeController]);
    function homeController($scope, UserService){

        $scope.userLogado= localStorage.getItem('Username'); // Recupera usuario informado e pega informaçõa para navbar
 
        $scope.username = $scope.userLogado;

        // $scope.carregarUserX= carregarUser;
        // console.log('carregaUser',carregarUser);

        // function carregarUser(carregarUserX) {            
        //     UserService.getUserData(carregarUserX).then(
        //         function(data){
        //             $scope.user = data;
        //             $scope.userImg = data.avatar_url;
        //             console.log('homeController',data);
        //         }
        //     )
        //     console.log('homeController',data);
            
        // }


     
       
    

        
       

        

    };
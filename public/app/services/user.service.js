angular.module('appModule')
    .service('UserService', userService);

    function userService($http, $q) {
// e30a96b473ba2c5b7d0a3759a9a260606a9ddcbd CHAVE API GITHUB
        return{
            getUserData: getUserData
        }

        function getUserData(name) {
            var defer = $q.defer();
            var request = {
                url: 'https://api.github.com/users/'+ name,
                method: 'GET',
                headers:{
                    'Authorization': "token e30a96b473ba2c5b7d0a3759a9a260606a9ddcbd"
                  },
            }


            $http(request)
                .then(
                    function(response){
                        defer.resolve(response.data);
                        // console.log(response)
                        M.toast({html: 'Sucesso', classes:'rounded'})
                    },
                    function(error){
                        defer.reject(error);
                        M.toast({html: 'Error: '+error.data.message, classes:'rounded'})
                    }
                );

            return defer.promise;
        }
    }
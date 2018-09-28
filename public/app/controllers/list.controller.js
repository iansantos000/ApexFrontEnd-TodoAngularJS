angular.module('appModule')
    .controller('ListController',listController);
    function listController($scope){
        console.log('ToDoCtrl Works!')
        
        $scope.mostrarToDo = true; // Inicia verdadeiro para aparecer. ng-show faz des/aparecer tarefa.

        $scope.ToDos = [
        ];
        
        $scope.getTotalToDos = function () {
          return $scope.ToDos.length;
        };
        

        $scope.validForm = function () {
            if ($scope.formToDoText) {
                $scope.addToDo()
            } else {
                console.log ('Error');               
            }

        }
        $scope.addToDo = function () { // Adiciona itens ja executados
            if ($scope.formToDoText) {
                $scope.ToDos.push({text:$scope.formToDoText, done:false}); // text-> Adiciona item a Lista Done: se ele foi executado
                $scope.formToDoText = ''; // Limpa o form de input para mais tarefas   
            } else {
                console.log ('Error');
                M.toast({   html: 'Prencha uma tarefa',
                            classes:'rounded red darken-1'
                        });
            }
        }
        

        // $scope.delToDo = function () { // Limp item adicionado
        //     $scope.ToDos.push({text:$scope.formToDoText, done:false}); // text-> Adiciona item a Lista Done: se ele foi executado
        //     $scope.formToDoText = ''; // Limpa o form de input para mais tarefas
        //   };
        
        $scope.clearCompleted = function () { //Deleta todos os itens ja executados
            $scope.ToDos = _.filter($scope.ToDos, function(ToDo){
                return !ToDo.done;
            });
        };

    };

angular.module('appModule',['ui.router', 'app.components', 'ngAnimate'])
    .run(function ($transitions, $state) {
        $transitions.onStart({ to: 'home.**' }, function (evt) {
            console.log('Entrou home **');
            console.log(localStorage.getItem('Username'));

            let name = localStorage.getItem('Username');

            if (!name) {
                $state.go('login');
                M.toast({
                    html: 'Usuario invalido',
                    classes: 'rounded red darken-1'
                })
            }
        });
        M.AutoInit();
        console.log('Start app!');
    });
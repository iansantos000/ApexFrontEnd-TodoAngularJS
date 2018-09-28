angular.module('app.components')
    .directive('appNav', [appNav])

function appNav() {

    return {
        restrict: 'E', // E-> Element A-> Atributo C-> Class  M-> Comment // Eh possivel mesclar elas
        "scope": { 
            userName: '=',
            title:'@', // @ texto + Pega texto da variavel
            meuNome: '=', // '=' =>conteudo da variavel 
            meuSobrenome: '=',
            meuArrayx: '=', // 
            acao: '&',
        },
        templateUrl: './app/directives/navbar/navbar.directive.html',
        link: link,
    }


    function link(scope, element, attrs) {
        console.log('navbarDirective');
    }
}

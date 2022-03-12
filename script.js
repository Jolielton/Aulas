

    // function entrar (){}  Padrão 

    function entrar (){

        var area = document.getElementById ('area');
        var texto = prompt ('Digite seu nome ?');

        if (texto == '' || texto == null){
        alert('Favor colocar o nome !');
        area.innerHTML = 'Bem vindo... ' + texto;

    }else{ 
        area.innerHTML = 'Bem vindo ' + texto;

    }

    }

    function entrar2(nome){
        var area = document.getElementById ('area2');
        var texto= prompt ('Digite seu Sobrenome');
        area.innerHTML= nome  + " " + texto;


    }



function entrar3(idade){
    var area = document.getElementById ('area3');
    var idade= prompt ('Digite sua idade');
    area.innerHTML= 'Voce tem ' + " "  + idade + ' anos !';


}

   


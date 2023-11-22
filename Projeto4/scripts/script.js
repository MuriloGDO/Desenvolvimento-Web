function calcular(){
    var input_adultos = document.querySelector("#adultos");
    var numero_de_adultos = input_adultos.value;
    var input_criancas = document.querySelector("#criancas");
    var numero_de_criancas = input_criancas.value;
    var input_duracao = document.querySelector("#duracao");
    var tempo_de_duracao = input_duracao.value;

    let quant_de_carne;
    let quant_de_bebidas;
    let quant_de_latas;
    let numero_de_pessoas = numero_de_adultos + numero_de_criancas/2;

    if(tempo_de_duracao >= 6){
        quant_de_carne = (650*numero_de_pessoas)/1000;
        quant_de_bebidas = (1.5*numero_de_pessoas)/2;
        quant_de_latas = (2000*numero_de_adultos)/350;
    }
    else{
        quant_de_carne = (400*numero_de_pessoas)/1000;
        quant_de_bebidas = (numero_de_pessoas)/2;
        quant_de_latas = (1200*numero_de_adultos)/350;
    }

    alterar(quant_de_carne, quant_de_latas, quant_de_bebidas);
}

function alterar(quant_de_carne, quant_de_latas, quant_de_bebidas){
    var x = document.getElementById("resultado");
    x.innerHTML = "<p>" + quant_de_carne + " Kg de carne</p> \n <p>" + quant_de_latas + " Latas de cerveja</p> \n <p>"+ quant_de_bebidas + " Bebidas de 2L</p>";
}
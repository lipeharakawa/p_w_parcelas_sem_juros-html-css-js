function calcular(){
    valor = parseInt(document.getElementById("valor").value);
    parcela = parseInt(document.getElementById("parcela").value);
    var listaParcelas = document.getElementById("lista");

    if(isNaN(valor)) v=0;
    if(isNaN(parcela)) p=0;

    if(parcela > 0 && parcela <= 10){

        var valorParcela = valor / parcela;

    for(i = 1; i <= parcela; i++){

        listaParcelas.innerHTML = "Parcela " + i + " = R$ " + valorParcela.toFixed(2) + "<br>" + "Total = R$ " + valor.toFixed(2) + "<br>";
    }
    }else{
        alert("❌ As parcelas devem ser de 1 a 10!");
    }
}

function limpar(){
    document.getElementById("valor").value = " ";
    document.getElementById("parcela").value = " ";
}
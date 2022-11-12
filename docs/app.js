//EX1
function lancVertical() {
    var acelGravidade = 10;
    var velInicial = parseInt(document.getElementById('vinicial').value);

    var hmax = velInicial/(2*acelGravidade);
    let tempoSubida = velInicial/acelGravidade;
    document.getElementById('saida').innerHTML = "Altura máxima (em metros): " + hmax +"<br>"+ "Tempo total de subida do objeto (em segundos): " + tempoSubida;
    alert("Altura máxima (em metros): " + hmax +"\n"+ "Tempo total de subida do objeto (em segundos): " + tempoSubida);
}

//EX2
function pontoMaxMin() {
    var a, b, c, delta, Xv, Yv;
    
    a = parseInt(document.getElementById('varA').value);
    b = parseInt(document.getElementById('varB').value);
    c = parseInt(document.getElementById('varC').value);
    delta = (b*b)-(4*a*c);

    Xv = -1*(b/(2*a));
    Yv = -1*(delta/(4*a));

    document.getElementById('saida').innerHTML = "Xv: " + Xv +"<br>"+ "Yv: " + Yv;
    alert("Xv: " + Xv +"\n"+ "Yv: " + Yv);
}

//EX3
function temperatura() {
    var valorRecebido, celsius, farenheit;

    valorRecebido = parseInt(document.getElementById('valorTemp').value);
    farenheit = (valorRecebido*1.8)+32
    celsius = (valorRecebido-32)/1.8

    if(document.getElementById('farenheit').checked == true) {
        document.getElementById('saida').innerHTML = "<b>"+valorRecebido+"℃</b> graus Celsius equivalem a <b>"+farenheit+"℉</b> graus Farenheit";
        alert(valorRecebido+"℃ graus Celsius equivalem a "+farenheit+"℉ graus Farenheit");
    }
    else {
        document.getElementById('saida').innerHTML = "<b>"+valorRecebido+"℉</b> graus Farenheit equivalem a <b>"+celsius+"℃</b> graus Celsius";
        alert(valorRecebido+"℉ graus Farenheit equivalem a "+celsius+"℃ graus Celsius");
    }
}

//EX4
function consumoEnergia() {
    var valor, quantidadeKwh, valorUnit;

    quantidadeKwh = parseFloat(document.getElementById('qtdKwh').value);
    valorUnit = parseFloat(document.getElementById('valorKwh').value);

    if(quantidadeKwh > 100 && quantidadeKwh <= 200) {
        valor = quantidadeKwh*(1.25*valorUnit);
    }
    else if(quantidadeKwh > 200) {
        valor = quantidadeKwh*(1.50*valorUnit);
    }
    else {
        valor = quantidadeKwh*valorUnit;
    }

    document.getElementById('saida').innerHTML = "Valor: R$ "+valor;
    alert("Valor: R$ "+valor);
}
function fact(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}

function mm1(event) {

    event.preventDefault()

    var lambda = parseInt(document.getElementById("lambdaField").value);
    var miu = parseInt(document.getElementById("miuField").value);
    var k = parseInt(document.getElementById("kField").value);

    if (document.getElementById("lambdaField").value.length == 0 || document.getElementById("miuField").value.length == 0 || document.getElementById("kField").value.length == 0) {
        alert("Hay espacios vacios. Rellene todos antes de continuar");
    } else {
        var LValue = lambda / (miu - lambda);
        var WField = 1 / (miu - lambda);
        var LqField = ((lambda * lambda) / (miu * (miu - lambda))).toFixed(2);
        var WqField = (lambda / miu * (miu - lambda)).toFixed(2);
        var pField = (lambda / miu).toFixed(2) * 100;
        var P0Field = (1 - (lambda / miu)).toFixed(2) * 100;
        var probField = Math.pow((lambda / miu), (k + 1)).toFixed(2) * 100;


        document.getElementById("LField").innerHTML = LValue;
        document.getElementById("WField").innerHTML = WField;
        document.getElementById("LqField").innerHTML = LqField;
        document.getElementById("WqField").innerHTML = WqField;
        document.getElementById("pField").innerHTML = pField + "%";
        document.getElementById("P0Field").innerHTML = P0Field + "%";
        document.getElementById("ProbField").innerHTML = probField + "%";

        document.getElementById("cardResult").style.visibility = 'visible';
        document.getElementById("cardResultText").innerHTML = "El tiempo estimado en cola es de " + 60 * WqField + " minutos, mientras que el tiempo de servicio (en el que se atiende) es de " + WField * 60 + " minutos.";
    }

}

function mmm(event) {

    event.preventDefault()

    var lambda = parseInt(document.getElementById("lambdaField").value);
    var miu = parseInt(document.getElementById("miuField").value);
    var m = parseInt(document.getElementById("mField").value);
    var sumatoria = 0;

    if (document.getElementById("lambdaField").value.length == 0 || document.getElementById("miuField").value.length == 0 || document.getElementById("mField").value.length == 0) {
        alert("Hay espacios vacios. Rellene todos antes de continuar");
    } else {
        for (let n = 0; n < m - 1; n++) {
            var resultado = ((1 / fact(n)) * Math.pow((lambda / miu), n));
            sumatoria += resultado;
        }

        var P0 = (1 / (sumatoria + ((1 / fact(m)) + (Math.pow((lambda / miu), m) * ((m * miu) / ((m * miu) - lambda)))))).toFixed(2);
        var L = (((((lambda * miu) * Math.pow(lambda / miu, m)) / (fact(m - 1) * Math.pow((m * miu) - lambda, 2)))) * P0 + (lambda / miu)).toFixed(2);
        var W = (L / lambda).toFixed(2);
        var Lq = (L - (lambda / miu)).toFixed(2);
        var Wq = (Lq / lambda).toFixed(2);
        var p = (lambda / (m * miu)).toFixed(2);
        //Revisar el P0
        document.getElementById("P0Field").innerHTML = P0 * 100 + "%";
        document.getElementById("LField").innerHTML = L;
        document.getElementById("WField").innerHTML = W;
        document.getElementById("LqField").innerHTML = Lq;
        document.getElementById("WqField").innerHTML = Wq;
        document.getElementById("pField").innerHTML = p;

        document.getElementById("cardResult").style.visibility = 'visible';
        document.getElementById("cardResultText").innerHTML = "El tiempo estimado en cola es de " + 60 * Wq + " minutos, mientras que el tiempo de servicio (en el que se atiende) es de " + W * 60 + " minutos.";
    }
}

function md1(event){

    event.preventDefault()

    var lambda = parseInt(document.getElementById("lambdaField").value);
    var miu = parseInt(document.getElementById("miuField").value);

    var Lq = (Math.pow(lambda,2)/((2*miu)*(miu-lambda)));
    var Wq = ((lambda)/((2*miu)*(miu-lambda)));
    var L = Lq + (lambda/miu);
    var W = (Wq + (1/miu));

    document.getElementById("LqField").innerHTML = Lq.toFixed(2);
    document.getElementById("WqField").innerHTML = Wq.toFixed(2);
    document.getElementById("LField").innerHTML = L.toFixed(2);
    document.getElementById("WField").innerHTML = W.toFixed(2);

    document.getElementById("cardResult").style.visibility = 'visible';
        document.getElementById("cardResultText").innerHTML = "El tiempo estimado en cola es de " + 60 * Wq.toFixed(2) + " minutos, mientras que el tiempo de servicio (en el que se atiende) es de " + (W * 60).toFixed(2) + " minutos.";
}
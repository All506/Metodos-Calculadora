function mm1(event){

    event.preventDefault()

    var lambda = parseInt(document.getElementById("lambdaField").value);
    var miu = parseInt(document.getElementById("miuField").value);
    var k = parseInt(document.getElementById("kField").value);
    
    if (document.getElementById("lambdaField").value.length == 0 || document.getElementById("miuField").value.length == 0 || document.getElementById("kField").value.length == 0){
        alert("Hay espacios vacios. Rellene todos antes de continuar");
    } else {
        var LValue = lambda / (miu - lambda);
        var WField = 1/(miu-lambda);
        var LqField = ((lambda*lambda)/(miu*(miu-lambda))).toFixed(2);
        var WqField = (lambda / miu*(miu-lambda)).toFixed(2);
        var pField = (lambda / miu).toFixed(2)*100;
        var P0Field = (1 - (lambda/miu)).toFixed(2)*100;
        var probField = Math.pow((lambda/miu),(k+1)).toFixed(2)*100;
    
    
        document.getElementById("LField").innerHTML = LValue;
        document.getElementById("WField").innerHTML = WField;
        document.getElementById("LqField").innerHTML = LqField;
        document.getElementById("WqField").innerHTML = WqField;
        document.getElementById("pField").innerHTML = pField+"%";
        document.getElementById("P0Field").innerHTML = P0Field+"%";
        document.getElementById("ProbField").innerHTML = probField+"%";
    }
    
}
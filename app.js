function ejercicio1(){
    var num1 = 5;
    var num2 = 8;
    if(!(num1>num2)) {
        alert("num1 no es mayor que num2");
    }
    if(num2>0){
        alert("num2 es positivo");
    }
    if(num1<0 || num1!=0) {
        alert("num1 es negativo o distinto de cero");
    }
    if(++num1 > num2) {
        alert("Incrementar en 1 unidad el valor de num1 lo hace mayor que num2");
    }
}

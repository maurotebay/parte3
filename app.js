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

function ejercicio2(){
    var frutas=["Banana", "Manzana", "Pera", "Naranja", "Mandarina"];
    for(index in frutas){
        console.log(frutas[index]);
    }
}

function ejercicio3(){
    var frutas=["Banana", "Manzana", "Pera", "Naranja", "Mandarina"];
    var sorted=frutas.sort();
    console.log(sorted);
    
    frutas.push("Kiwi");
    frutas.unshift("Uva");
    console.log(frutas);

    frutas.pop();
    frutas.shift();
    console.log(frutas);

    var reversed=frutas.reverse();
    console.log(reversed);

    var c=0;
    var concatenado = "";
    while(c<frutas.length){
        concatenado=concatenado.concat(frutas[c]);
        c++;
    }
    console.log(concatenado);

    for(var i=0; i<frutas.length; i++){
        console.log(frutas[i].toUpperCase());
    }
}

function ejercicio4(){
    var frase="La Manzana es Verde";
    var fraseMin=frase.toLowerCase();
    console.log(fraseMin);

    var ult4=frase.substring(-4);
    console.log("Los ultimos 4 caracteres son: '" + ult4 + "'");

    var frase345=frase.substring(3, 6);
    console.log("Los caracteres 3, 4 y 5 de la frase son: '" + frase345 + "'");

    var palabras=frase.split(" ");
    console.log(palabras);
}

function ejercicio5(){
    var frase = prompt("Ingrese una frase:");
    alert("Su frase con la primera letra en maysucula es: " + frase.charAt(0).toUpperCase() + frase.slice(1));
}
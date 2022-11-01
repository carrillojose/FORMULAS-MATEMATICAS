/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

//1) Preguntamos la figura que deseamos
let figura = prompt("Escribe el numero que deseas utilizar 1) triangulo, 2) rectangulo , 3)circulo 4)cuadrado 5)rombo 6)paralelogramo 7)trapecio 8)poligono regular")

//2) Creamos las variables
let base; 
let altura;
let radio;

//3) Las condiciones en base a la pregunta --> Switch

switch(figura){
    case "1":
        //Le preguntamos la formula
        base = parseInt(prompt("¿cuanto tienes de base?: "))
        altura = parseInt(prompt("¿cuanto tienes de altura: "))
        document.write(`El area del triangulo  es ${base*altura/2}`)
        break
    case "2":
        base= prompt("¿Cuantos tienes de base?: ")
        altura = prompt("¿Cuanto tienes de altura?: ")
        document.write(`El area del rectangulo es ${base*altura}`)
        break
    case "3":
        radio = prompt("¿Cuanto de radio tienes? ")
        //math.pow() --> Crear la potencia de pi 
        document.write(`El area del circulo es ${Math.PI* Math.pow(radio,2)}`)
        break
    case "4":
        lado = prompt("¿cuanto de lado tienes?")
        document.write(`El area del cuadrado es ${lado*lado}`)
        break
    case "5":
        D = prompt("¿cuanto de diagonal mayor tienes?")
        d = prompt("¿cuanto de diagonal menor tienes ?")
        document.write(`El area del rombo es ${D*d/2}`)
        break
    case "6":
        B = prompt("¿cuanto de base tienes?")
        H = prompt("¿cuanto de altura tienes?")
        document.write(`El area del paralelogramo es ${B*H}`)
        break
    case "7":
        var b, B, h, P, A;
        b = parseInt(prompt("¿cuanto de base menor tienes?"))
        B = parseInt(prompt("¿cuanto de base mayor tienes?"))
        h = parseInt(prompt("¿cuanto de altura tienes?"))
        var area = ((parseInt(b) + parseInt(B)) /2) * parseInt(h);
        document.write(`El area del trapecio es` + area);
        break
    case "8":
        P = parseInt(prompt("¿cuanto de perimetro tienes?"))
        A = parseInt(prompt("¿cuanto tienes de apotema?"))
        var ar = ((parseInt(P) * parseInt(A)) /2)
        document.write(`El area del poligono regular es`+ar);
        break
    default:
        document.write("Esta figura no esta disponible")
}


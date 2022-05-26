// Codigo del cuadrado
const ladoCuadrado = 5;
// console.group("Cuadrados");
// console.log(`los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = function(lado){
    return lado * 4;
   
};

// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}`);

const areaCuadrado = function(lado){
   return lado * lado;
};

// console.log(`El area del cuadrado es: ${areaCuadrado}`);
// console.groupEnd();
// Codigo del Triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = function(ladoA, ladoB, base){
    return  ladoA + ladoB + base;
};

const areaTriangulo = function(base, altura){
    return (base * altura) / 2;
};

// console.group("Triangulos");
// console.log(`Los lados del triandolo miden: ${ladoTriangulo1} cm y ${ladoTriangulo2} cm con una base de ${baseTriangulo} cm`);

// console.log(`La altura del triangulo es: ${alturaTriangulo} cm`);
// console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);
// console.log(`El area del triangulo es: ${areaTriangulo} cm²`);
// console.groupEnd();

// //funcion para triangulo
// function triangulo(lados, base, altura){
//     const ladoTriangulo1 = lados;
//     const ladoTriangulo2 = lados;
//     const baseTriangulo = base;
//     const alturaTriangulo = altura;
//     const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//     const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//     console.group("Triangulos");
//     console.log(`Los lados del triandolo miden: ${ladoTriangulo1} cm con una base de ${baseTriangulo} cm`);

//     console.log(`La altura del triangulo es: ${alturaTriangulo} cm`);
//     console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);
//     console.log(`El area del triangulo es: ${areaTriangulo} cm²`);
//     console.groupEnd();
// };


//Codigo Circulo



//radio
    const radioCirculo = 4;
    // console.log(`El radio del circulo es: ${radioCirculo}cm`);
//diametro
    const diametroCirculo = function(radio){ 
        return radio * 2;
    };
    
//PI
    const PI = Math.PI;
    // console.log(`PI es: ${PI}`);
//Circunferencia
    const perimetroCirculo = function(diametro){
        return diametro * PI;
    };
    
//Area
    const areaCirculo = function(radio){
        return  (radio * radio) * PI;
    };
    

// //Funcion circulo
// function circulo(radio){
//     //radio
//     let radioCirculo = radio;
//     console.log(`El circulo tiene un radio de: ${radioCirculo}cm`);
//     //diametro
//     const diametroCirculo = radioCirculo * 2;
//     console.log(`El circulo tiene un diametro de: ${diametroCirculo}cm`);
// //PI
//     const PI = Math.PI;
//     console.log(`PI es: ${PI}`);
// //Circunferencia
//     const perimetroCirculo = diametroCirculo * PI;
//     console.log(`El criculo tiene una circunferencia de: ${perimetroCirculo}cm`);
// //Area
//     const areaCirculo = (radioCirculo * radioCirculo) * PI;
//     console.log(`El circulo tiene un area de: ${areaCirculo}cm²`);
// console.groupEnd();
// };
 
//Triangulo Isosceles
    
    // function Altura(ladoA, ladoB, base){
    //     if(ladoA === ladoB && base != ladoA){
    //          const altura = Math.sqrt(ladoA**2 - (base**2 / 4)); 
    //         alert(`Es un trangulo Isosceles con una altura de ${altura}`);
    //     }
    //     else{
    //         alert("No es un triangulo isosceles");
    //     };
    // };
        function Altura(ladoA, ladoB, base)
        {
            return altura = Math.sqrt(ladoA**2 - (base**2 / 4));
        }
// Funciones para interactuar con el Html
                //Cuadrado
    const buttonPeri = document.getElementById("sq-perimetro");
    buttonPeri.addEventListener("click",calcPerimetro);
    const buttonArea = document.getElementById("sq-area");
    buttonArea.addEventListener("click", calcArea);
    squareResult = document.getElementById("sq-result");
    const input = document.getElementById("square-textfield");
  
function calcPerimetro(){
    
    const value = parseInt(input.value);
    if(value > 0){
    squareResult.className  =   "sq-result";
    squareResult.innerHTML = perimetroCuadrado(value) +" CM";
    }
    else{
    squareResult.className  = "";
    squareResult.innerHTML = "";
    }
};

function calcArea(){
    
    const input = document.getElementById("square-textfield");
    const value = parseInt(input.value);
    if(value > 0)
    {
    squareResult.className  =   "sq-result";
    squareResult.innerHTML  = areaCuadrado(value) +" CM²";
    }
    else{
    squareResult.className  = "";
    squareResult.innerHTML = "";
    }
};
                //cuadrado

                //triangulo
    const trianbutton1  = 
    document.getElementById("tri-perimetro");
    trianbutton1.addEventListener("click", perimetroTriangle);
    

function perimetroTriangle()
{
    const triangleResult = 
    document.getElementById("triangle-result");
    const text1 = 
    document.getElementById("triangle-textfieldA");
    const sideA = parseInt(text1.value);
    const text2 = 
    document.getElementById("triangle-textfieldB");
    const sideB = parseInt(text2.value);
    const text3 = 
    document.getElementById("triangle-textfieldBase");
    const bse = parseInt(text3.value);
    
    if(sideA > 0 && sideB > 0 && bse > 0)
    {
        triangleResult.className    =   "triangle-result";
        triangleResult.innerHTML    =   perimetroTriangulo(sideA,sideB,bse) + " CM";
    }
    else{
        triangleResult.className  = "";
        triangleResult.innerHTML = "";
    }
};

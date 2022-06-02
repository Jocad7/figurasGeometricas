//media
const mediaText = document.getElementById("datosMedia");
const result = document.getElementById("result-media");
let datos=[];
function calcMediaAritmetica(){
    if(mediaText.value != "")
    {
        datos =[];
        datosProc = mediaText.value;
        datos = datosProc.split(',').map(function(item){
            return parseInt(item, 10);
        });
        sumDatos= datos.reduce((ant,act)=>{
            return ant + act;
            });
        let mediaA = sumDatos / datos.length;
        result.innerHTML = mediaA.toFixed(2);
    }
    else{
        result.innerHTML = "Ingresa datos correctos";
    }
};
        
//mediana
const medianaText = document.getElementById("medianaText");
const resultMediana = document.getElementById("result-mediana");

let calcMediana = () =>{
    if(medianaText.value != "")
    {
        let datosMediana = medianaText.value.split(',').map(function(item){
            return parseInt(item, 10);
        });
        if(datosMediana.length % 2 === 0)
            {
                let elemento1= datosMediana.length /2;
                let elemento2= (datosMediana.length /2) - 1;
                let mediana= (datosMediana[elemento1] + datosMediana[elemento2])/2;
                resultMediana.innerHTML = mediana;
            }
            else{
                let order = datosMediana.sort((a,b)=>{
                    return a-b;
                }
                );
                let numeroMedio = (order.length / 2) - .5;
                let mediana = datosMediana[numeroMedio];
                resultMediana.innerHTML = mediana;
            }
    }
    else{
        resultMediana.innerHTML = "Ingresa datos correctos";
    }
}

//moda
const modaText = document.getElementById("modaText");
const resultModa = document.getElementById("result-moda");

let calcModa2 =
() =>
    {
        if(modaText.value != "")
        {
                let datosModa = modaText.value.split(',').map(function(item){
                    return parseInt(item, 10);
                });
                let count = {};
                datosModa.map(
                    (elemento)=>{
                       count[elemento] ? count[elemento] += 1 : count[elemento] = 1;
                    }
                ); 
                //CountResume es nuestro objeto resumido, y lo estamos convirtiendo en un Array.
                let countResume = Object.entries(count);
                let resumeOrder = countResume.sort((elementoA, elementoB)=>{
                    return elementoA[1] - elementoB[1];
                });
                moda =resumeOrder[resumeOrder.length -1];
               
                resultModa.innerHTML= `El ${moda[0]} se repite ${moda[1]} veces.`   ;
         }
         else{
            resultModa.innerHTML= "Ingresa datos correctos";
         }
    };
        
//media armonica
const armonicaText = document.getElementById("armonicaText");
const resultArmonica = document.getElementById("result-armonica");

let mediaArmonica =
            ()=>{
                if(armonicaText.value != "")
                {
                    let datos = armonicaText.value.split(',').map(function(item){
                        return parseInt(item, 10);
                    });

                    let elementGroup = datos.length;
                    const invers = datos.map((element)=>{
                        return 1 / element;
                    });
                    const sumInvers= invers.reduce((valorAnterior,valorActual)=>{
                        return valorAnterior + valorActual;
                    },0);
                    let resultado = elementGroup / sumInvers;
                    resultArmonica.innerHTML= resultado.toFixed(2);
                }
                else{
                    resultArmonica.innerHTML= "Ingresa datos correctos";
                }
            }
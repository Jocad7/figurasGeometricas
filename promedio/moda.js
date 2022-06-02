const lista= [7,4,5,6,7,7,7,2,2,6,6,5,1,6,4];

const listCount ={};

lista.map(
    (elemento)=>
    {
        if(listCount[elemento])
            {
                listCount[elemento] += 1;
            }
            else
                {
                    listCount[elemento] = 1;
                }
    }
);
let listaResumida = Object.entries(listCount);
let listaOrdenada = listaResumida.sort((a,b)=>{return a-b}); // X no sirve
let mod = listaOrdenada[listaOrdenada.length-1];

  


let calcModa =
    (list) =>
            {
                let count = {};
                list.map(
                    (elemento)=>{
                       count[elemento] ? count[elemento] += 1 : count[elemento] = 1;
                    }
                ); 
                //CountResume es nuestro objeto resumido, y lo estamos convirtiendo en un Array.
                let countResume = Object.entries(count);
                let moda = countResume.sort((elementoA, elementoB)=>{
                    return elementoA[1] - elementoB[1];
                });
                return moda[moda.length-1];
            };


            let calcModa2 =
    (list) =>
            {
                let count = {};
                list.map(
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
                console.log(`El numero con mas coinsidencias es: ${moda[0]} repitiendose un total de: ${moda[1]} veces.`);
                return moda;
            };

           //Media Armonica

           var lista2 = [12,14,16,17];

        let mediaArmonica =
            (lista)=>{
                let elementGroup = lista.length;
                const invers = lista.map((element)=>{
                    return 1 / element;
                });
                const sumInvers= invers.reduce((valorAnterior,valorActual)=>{
                    return valorAnterior + valorActual;
                },0);
                let resultado = elementGroup / sumInvers;
                return resultado;
            }
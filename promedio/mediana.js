const lista1 = [200,145,74,90,990];

const mitadLista = lista1.length / 2;


function esPar(numerito)
    {
        if(numerito % 2)
        {
            return true;
        }
        else{
            return false;
        }
    };
/*
if(){
    // si es par necesitamos 2 elementos
    //el promedio
    //mediana
    }
else
    {
        //posicion mitad lista dentro de lista1
        // ->mediana
    };
*/
let calcMediana = (list) =>{
    if(list.length % 2 === 0)
        {
            let elemento1= list.length /2;
            let elemento2= (list.length /2) - 1;
            let mediana= (list[elemento1] + list[elemento2])/2;
            return mediana;
        }
        else{
            let order = list.sort((a,b)=>{
                return a-b;
            }
            );
            let numeroMedio = (order.length / 2) - .5;
            let mediana = list[numeroMedio];
            return mediana;
        }
}
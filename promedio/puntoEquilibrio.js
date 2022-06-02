var costeProducto = 1100;
var precioVenta = 2100;
var dias = 30;
var costesFijos=[];

let puntoEquilibrio = (costeP, precioV, costesF, dias)=>
    {
        let profit = precioV - costeP;
        costesFijos=[];
        costesFijos.push(costesF);
        let sumCostes = [];
        sumCostes = costesFijos.reduce((anterior,actual)=>{
            return anterior + actual;
        },0
        );
        let equilibrio = (sumCostes / profit) / dias;
        return equilibrio
    };
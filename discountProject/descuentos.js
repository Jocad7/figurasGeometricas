// const precioOriginal = 100;
// const descuento = 15;



// console.log(`El precio original del producto es de $${100}, con el descuento de ${descuento}% solo tendras que pagar $${precioConDescuento}`);

// function calcPrecioConDescuento(precio,descuento)
//     {
//         const porcentajePrecioDescuento = 100 - descuento;
//         const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
//         // console.log(`Tu producto valorado en $${precio} con el descuento de ${descuento}% tiene un precio final de $${precioConDescuento}`);
        
//     };

    
    
    const input2 = document.getElementById("rangeDiscount");

    const input3 = document.getElementById("originalPrice");
    
    function descuentoP()
    {
        if(input3.value>0){
        const input1 = document.getElementById("pantalla");
        const input2 = document.getElementById("rangeDiscount");
        const input3 = document.getElementById("originalPrice");
        const discount = parseInt(input2.value);
        const price = parseInt(input3.value);
        const porcentajePrecioDescuento = 100 - discount;
        const precioConDescuento = (price * porcentajePrecioDescuento) / 100;
        return precioConDescuento + "$";
        }
        else{
            return ""
        }
    }
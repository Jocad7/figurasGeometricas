const priceO = parseFloat(document.getElementById("originalPrice").innerText);
const coupons=[0,15,20,30,45];
const couponQuery = document.getElementById("coupons");


function aplicarDescuento(){
    
const couponSelected = coupons[parseInt(couponQuery.value)];
const porcentajePrecioDescuento = 100 - couponSelected;
const precioConDescuento = (priceO * porcentajePrecioDescuento) / 100;
originalPrice.innerHTML = precioConDescuento.toFixed(2);
}


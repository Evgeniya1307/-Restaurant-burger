import React from "react";


class Shipment  extends React.Component{
render(){
    const {total}=this.props;
    //создала переменную shipping(доставка) если сумма заказа выше 0 и в тоже самое время сум ма заказа м еньше 500 то стоимость доставки 350р в противном случае если сумма заказа больше 500 рублей то доставка 99 р
    const shipping = total > 0 && total < 500 ? 350 : 99;
    //ещё одну переменную если стоимость доставки которую мы получаем в предыдущей переменной===99 рублей то мы тогда вот эту стоимость буду обворачивать  в класс <span дальше если 99 рублей то обварачиваем в span красивый в противном случае : обварачиваем в обычный span  
    const  shippingNeon = shipping ===
    99 ? (
        <span className="font-effect-neon total_wrap-cheap">{shipping} ₽ </span>
        ) : (
            <span>{shipping} ₽</span>
        );
    
    return(
        <div className="total">
            <div className="total_wrap">
            <div>
            <div>Доставка :{total > 0 ? shippingNeon : null}</div>
                
            </div>
                <div className="total_wrap-final">Итого:{total}₽</div>
            </div>
        </div>
    );
}
}

export default Shipment;


// если total сумма нашего заказа больше 0 то мы показываем shippingNeon в противном случае ничего в заказ не добавлено null
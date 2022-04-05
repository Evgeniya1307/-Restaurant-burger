import React from "react";


class Shipment  extends React.Component{
render(){
    const {total}=this.props;
    //создала переменную shipping(доставка) если сумма заказа выше 0 и в тоже самое время сум ма заказа м еньше 500 то стоимость доставки 350р в противном случае если сумма заказа больше 500 рублей то доставка 99 р
    const shipping = total > 0 && total < 500 ? 350 : 99;
    return(
        <div className="total">
            <div className="total_wrap">
                <div className="total_wrap-final">Итого:{total}₽</div>
            </div>
        </div>
    );
}
}

export default Shipment;

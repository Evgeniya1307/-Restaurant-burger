import React from "react";
import Shipment from "./Shipment";


class Order extends React.Component{
   renderOrder =(key)=>{
    const burger = this.props.burgers[key];
    const count = this.props.order[key];
      
    const isAvailable=burger && burger.status==="available";//создала переменную и проверку 
   if(!burger) return null;
   
    if (!isAvailable){
        return( 
        <li className="unavailable" key ={key}>
            Извините,{burger? burger.name:"бургер"}временно недоступен 
        </li>//если есть бургер он не был удалён мы используем названи бургера если удалён используем слово бургер извините такой то бургер временно нендоступен 
        );    
}
    return(
    <li key ={key}>
        <span>
            <span>{count}</span>
       шт.{burger.name}
       <span>{count * burger.price}₽</span>
        <button className="cancellItem">&times;</button>
        </span>
    </li>
   );
};
//&times знак html крестик красный можем кликать и убирать 

   
    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal,key) => {
            const burger = this.props.burgers[key];
            const count = this.props.order[key];
       
            const  isAvailable = burger && burger.status === "available";
            if (isAvailable) {
                return prevTotal + burger.price * count;
            }
            return prevTotal;//добавили проверку если бургер доступен то мы его учитываем в общей сумме заказа если нет то не учитываем возвращаем сумму без кокректного бургера которого нет    
        },0);
        
        return (
            <div className="order-wrap">
             <h2>Ваш заказ</h2>   
             <ul className="order">{orderIds.map(this.renderOrder)}</ul>
            {total > 0 ? (
                <Shipment total = {total}/>
            ):(
                <div className="nothingSelected">
Выберите блюда и добавьте к заказу
                </div>
            
            )}
            </div>
        )
    }
}
export default Order;
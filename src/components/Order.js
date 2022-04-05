import React from "react";



class Order extends React.Component{
    render(){
        const orderIds = Object.keys(this.props.order);
        const total =
        
        return (
            <div className="order-wrap">
             <h2>Ваш заказ</h2>   
             <ul className="order">
             {orderIds.map(key=>{
                 return <li>{key}</li>
             })}
             </ul>
            </div>
        )
    }
}
export default Order;
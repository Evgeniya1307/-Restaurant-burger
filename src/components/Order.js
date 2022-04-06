import React from "react";
import Shipment from "./Shipment";
import{TransitionGroup, CSSTransition} from "react-transition-group";
import PropTypes from 'prop-types';

class Order extends React.Component {
  static propTypes = {
    burgers: PropTypes.object,
    order: PropTypes.object,
    deleteFromOrder: PropTypes.func
  };
  
  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];
    const isAvailable = burger && burger.status === "available"; //создала переменную и проверку
    const transitionOptions = {
classNames:"order",
key,
timeout:{enter:500, exit:500}
    }
    if (!burger) return null;

    if (!isAvailable) {
      return (
        <CSSTransition 
        {...transitionOptions}>
        <li className="unavailable" key={key}>
          Извините,{burger ? burger.name : "бургер"}временно недоступен  
        </li> 
        </CSSTransition>//если есть бургер он не был удалён мы используем названи бургера если удалён используем слово бургер извините такой то бургер временно нендоступен
     );
    }
    return (
      //время задержки наш элемент в данном случае li key={key} будет появляться в нашем html дереве и удаляться 
      <CSSTransition
      {...transitionOptions} >
      <li key={key}>
        <span>
<TransitionGroup component="span" className="count">
          <CSSTransition classNames="count" 
          key ={count}
          timeout={{enter:500, exit:500}}
          >
          <span>{count}</span>
          </CSSTransition>
          </TransitionGroup>
          шт.{burger.name}
          <span>{count * burger.price}₽</span>
          <button
            onClick={() => this.props.deleteFromOrder(key)}
            className="cancellItem"
          >
            &times;
          </button>
        </span>
      </li>
      </CSSTransition>
    );
  };
  //&times знак html крестик красный можем кликать и убирать

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === "available";
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }
      return prevTotal; //добавили проверку если бургер доступен то мы его учитываем в общей сумме заказа если нет то не учитываем возвращаем сумму без кокректного бургера которого нет
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Ваш заказ</h2>
        <TransitionGroup  component="ul" className="order">{orderIds.map(this.renderOrder)}
        </TransitionGroup>
       
        {total > 0 ? (
          <Shipment total={total} />
        ) : (
          <div className="nothingSelected">
            Выберите блюда и добавьте к заказу
          </div>
        )}
      </div>
    );
  }
}
export default Order;

import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";
import base from "../base";
import PropTypes from "prop-types";
import firebase from 'firebase/app';
import SignIn from "./Auth/SignIn";
class App extends React.Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    burgers: {},
    order: {},
  };

  componentDidMount() {
    //здесь принимаем из базы данных наши бургеры записываем их в стейт в обьект бургерс обновляется стейт и ререндерится компонент обновляется с пустым обьектом ордер
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.restarauntId); //чтобы получить данные из localStorage указываем какие данные хотим получить ()
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.restarauntId}/burgers`, {
      context: this,
      state: "burgers",
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.restarauntId, JSON.stringify(this.state.order)); //используем sеtItem чтобы добавить нужные нам данные 1 это ключ это наш ресторан {params.restaurantId}а в качестве значения места где хранятся наши заказы это this.state.order
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBurger = (burger) => {
    //1.чтобы добавить в state наш бургер:делаем копию обьекта  state создаё1м новую переменную const  и используем оператор спрет ...this.state.burgers,теперь в этот обьект должны добавить наш новый обьект бургер:burgers[`burger`${Date.now(этот метод даёт уникальную метку милисекундах используем для нумерации наших бургеров для экономии времени)}]
    const burgers = { ...this.state.burgers };
    //2. добавить новый бургер в  переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    //3.используем метод setstate чтобы записать обновлёный обьект бургерс в наш обьект state
    this.setState({ burgers });
  };

  updateBurger = (key, updatedBurger) => {
    //будет принимать ключ каждый обновлённый бургер
    //1.чтобы добавить в state наш бургер:делаем копию обьекта  state создаё1м новую переменную const  и используем оператор спрет ...this.state.burgers,теперь в этот обьект должны добавить наш новый обьект бургер:burgers[`burger`${Date.now(этот метод даёт уникальную метку милисекундах используем для нумерации наших бургеров для экономии времени)}]
    const burgers = { ...this.state.burgers };
    //2.будем обновлять каждый конкретный бургер
    burgers[key] = updatedBurger;
    //3.используем метод setstate чтобы записать обновлёный обьект бургерс в наш обьект state
    this.setState({ burgers });
  };

  deleteBurger = (key) => {
    //1.чтобы добавить в state наш бургер:делаем копию обьекта  state создаё1м новую переменную const  и используем оператор спрет ...this.state.burgers,теперь в этот обьект должны добавить наш новый обьект бургер:burgers[`burger`${Date.now(этот метод даёт уникальную метку милисекундах используем для нумерации наших бургеров для экономии времени)}]
    const burgers = { ...this.state.burgers };
    //2.Удаляем burger
    burgers[key] = null;
    //3.используем метод setstate чтобы записать обновлёный обьект бургерс в наш обьект state
    this.setState({ burgers });
  };

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurgers });
  };

  addToOrder = (key) => {
    //1.делаю копию обьекта state
    const order = { ...this.state.order };
    //2.нашу переменую ордер и возьмём ключ которое добавляем наш ключ равняется если этот ключ есть то к значению +1 если нет то добапвляем оператор или то добавляем со значение 1
    order[key] = order[key] + 1 || 1;
    //3.записываем обновлён.значение в обьект state
    this.setState({ order });
  };

  deleteFromOrder = (key) => {
    //1.делаю копию обьекта state
    const order = { ...this.state.order };
    //2.Удаляем бургер
    delete order[key];
    //3.записываем обновлён.значение в обьект state
    this.setState({ order });
  };

  handleLogout = async () => {
    await firebase.auth().signOut();
    window.location.reload();
  };

  render() {
    return (
      <SignIn>
        <div className="burger-paradise">
          <div className="menu">
            <Header title="Hot Burgers" />
            <ul className="burgers">
              {Object.keys(this.state.burgers).map((key) => {
                return (
                  <Burger
                    key={key}
                    index={key}
                    addToOrder={this.addToOrder}
                    details={this.state.burgers[key]}
                  />
                );
              })}
            </ul>
          </div>
          <Order
            deleteFromOrder={this.deleteFromOrder}
            burgers={this.state.burgers}
            order={this.state.order}
          />
          <MenuAdmin
            addBurger={this.addBurger}
            loadSampleBurgers={this.loadSampleBurgers}
            burgers={this.state.burgers}
            updateBurger={this.updateBurger}
            deleteBurger={this.deleteBurger}
            handleLogout={this.handleLogout}
          />
        </div>
      </SignIn>
    );
  }
}
export default App;

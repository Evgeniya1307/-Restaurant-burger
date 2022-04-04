import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import  sampleBurgers from "../sample-burgers";
class App extends React.Component {
 state={
   burgers: {},
   order:{}
 }

 addBurger=(burger)=>{
 //1.чтобы добавить в state наш бургер:делаем копию обьекта  state создаё1м новую переменную const  и используем оператор спрет ...this.state.burgers,теперь в этот обьект должны добавить наш новый обьект бургер:burgers[`burger`${Date.now(этот метод даёт уникальную метку милисекундах используем для нумерации наших бургеров для экономии времени)}]
  const burgers={...this.state.burgers}
//2. добавить новый бургер в  переменную burgers
  burgers[`burger${Date.now}`]=burger;
//3.используем метод setstate чтобы записать обновлёный обьект бургерс в наш обьект state
this.setState({burgers});
};

loadSampleBurgers=()=> {
this.setState({burgers:sampleBurgers});
};

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Hot Burger" />
        <ul className="burgers"></ul>
        </div>
        <Order />
        <MenuAdmin 
        addBurger={this.addBurger}
          LoadSampleBurgers={this.loadSampleBurgers}
        />
      </div>
    );
  }
}
export default App;

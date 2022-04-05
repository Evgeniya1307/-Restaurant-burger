import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import  sampleBurgers from "../sample-burgers";
import Burger from "./Burger";

class App extends React.Component {
 state={
   burgers: {},
   order:{}
 };

 addBurger= burger=> {
 //1.чтобы добавить в state наш бургер:делаем копию обьекта  state создаё1м новую переменную const  и используем оператор спрет ...this.state.burgers,теперь в этот обьект должны добавить наш новый обьект бургер:burgers[`burger`${Date.now(этот метод даёт уникальную метку милисекундах используем для нумерации наших бургеров для экономии времени)}]
  const burgers = {...this.state.burgers};
//2. добавить новый бургер в  переменную burgers
  burgers[`burger${Date.now()}`]=burger;
//3.используем метод setstate чтобы записать обновлёный обьект бургерс в наш обьект state
this.setState({burgers});
};

loadSampleBurgers = ()=> {
console.log("Ready To Load!!!")
  this.setState({burgers:sampleBurgers});
};

addToOrder = (key)=> {
  
}

  render() {
    return (
    <div className="burger-paradise">
        <div className="menu">
          <Header title="Hot Burgers" />
        <ul className="burgers">
          {Object.keys(this.state.burgers).map(key=>{
            return(
            <Burger 
            key={key}
              index={key}
              details={this.state.burgers[key]}
            />
            );
          })}
        </ul>
        </div>
        <Order burgers={this.state.burgers}order={this.state.order}/>
        <MenuAdmin 
        addBurger={this.addBurger}
        loadSampleBurgers={this.loadSampleBurgers}
        />
      </div>
    );
  }
}
export default App;

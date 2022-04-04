import React from "react";

class AddBurgerForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  stausRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  
  
  
  createBurger=(event)=>{
    event.preventDefault();
console.log("add burger!!!!")
}
  render() {
    return(
       <form className="burger-edit" onSubmit={this.createBurger}>
      <input name="name" type="text" placeholder="Name" autoComplete="off"/>
      <input name="price" type="ext" placeholder="Price"autoComplete="off"/>
      <select name="status" className="status">
<option value="available">Доступно</option>
<option value="unavailable">Убракть из Меню</option>
      </select>
      <textarea name="desc"  placeholder="Desc"/>
      <input name="image" type="text" placeholder="Image" autoComplete="off"/>
      <button type="sumbit">Добавить в меню</button>
    </form>
    );
  }
}

export default AddBurgerForm;

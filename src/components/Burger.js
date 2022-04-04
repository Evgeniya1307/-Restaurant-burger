import React from "react";



class Burger extends React.Component {
    render(){
        const {image,name}=this.props.details;
        return(
            <li className="menu-burger">
                <div className="image-container">
                    <img src={image}/>
                </div>
                <div className="burger-details">
                    <h3 className="burger-name">{name}

                    </h3>
                </div>
            </li>
        )
    }
}

export default Burger;
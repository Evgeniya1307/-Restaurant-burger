import React from "react";



class Burger extends React.Component {
    render(){
        const image = this.props.details.image;
        const name = this.props.details.name;
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
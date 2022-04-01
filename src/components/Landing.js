import React from "react";


class Landing extends React.Component{
    render() {
        return(
        <div className="restaurant_select">
       <div className="restaurant_select_top">
        <div className="restaurant_select_top-header">Выбери Ресторан</div>
        <div className="arrow_picker"></div>
        <div className="arrow_picker-up"></div>
        <div className="arrow_picker-down"></div>
        <div className="restaurant_select_bottom"></div>
        </div>
        </div>
        )
    }
}


export default Landing;
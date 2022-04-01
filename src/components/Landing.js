import React from "react";
class Landing extends React.Component{
    render() {
        return(
       <div className="restaurant_select">
                <div className="restaurant_select_top">
                    <div className="restaurant_select_top-header">Выбери Ресторан</div>

                    <div className="arrow_picker">
                    <div className="arrow_picker-up"></div>
                    <div className="arrow_picker-down"></div>
                </div>
                </div>
           
           <div className="restaurant_select_bottom">
           <ul>
                    <li>rest 1</li>
                    <li>rest 1</li>
                    <li>rest 1</li>
                </ul>
            </div>
            <button>Перейти в ресторан</button>
            </div>

        
        )
    }
}


export default Landing;
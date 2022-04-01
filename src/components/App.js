import React from "react";



class App extends React.Component{
    render(){
        return (
            <div className="burger-paradise">
                <div className="menu">
                    <Header/>
                </div>
                <Order/>
                <MenuAdmin/>
            </div>
        )
    }
}
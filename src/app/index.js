import React from "react";
import {render} from "react-dom";
import { HeaderComponent } from "./components/Header.component";
import { HomeComponent } from  "./components/Home.component";


class App extends React.Component {
    render() {
        let user = {
            name:'Anna',
            hobbies:['Sports','Car Racing']
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <HeaderComponent/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <HomeComponent name={'Harshit'} lastname={'Bhatt'} address={'Jammu'} user={user}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));

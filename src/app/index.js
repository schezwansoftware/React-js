import React from "react";
import {render} from "react-dom";
import { HeaderComponent } from "./components/Header.component";
import { HomeComponent } from  "./components/Home.component";


class App extends React.Component {
    render() {
        let component="ghas";
        if (true){
            component=<p>Sass</p>;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <HeaderComponent/>
                        { component }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <HomeComponent/>
                    </div>
                </div>
            </div>

        );
    }
}

render(<App/>, window.document.getElementById("app"));

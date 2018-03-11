import React from "react";
import {render} from "react-dom";
import { HeaderComponent } from "./components/Header.component";
import { HomeComponent } from  "./components/Home.component";


class App extends React.Component {
    constructor(){
        super();
        this.state={
            homeLink:'Home'
        };
    }
    static onGreet(){
        alert('Greetings from Outside');
    }

    changeLink(newName){
        this.setState(
            {
                homeLink:newName
            }
            );
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <HeaderComponent aboutLink={"About Us"} homeLink={this.state.homeLink} contactLink={"Contact Us"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <HomeComponent
                            name={'Harshit'}
                            initialAge={22}
                            greet={App.onGreet}
                            changeLink={this.changeLink.bind(this)}
                            initialLinkName={this.state.homeLink}

                        />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));

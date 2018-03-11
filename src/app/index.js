import React from "react";
import {render} from "react-dom";
import {HeaderComponent} from "./components/Header.component";
import {HomeComponent} from "./components/Home.component";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: 'Home',
            isHomeMounted: true
        };
    }

    static onGreet() {
        alert('Greetings from Outside');
    }

    onChangeHomeMounted() {
        this.setState(
            {
                isHomeMounted: !this.state.isHomeMounted
            }
        );
    }

    changeLink(newName) {
        this.setState(
            {
                homeLink: newName
            }
        );
    }

    render() {
        let homeCmp = "";
        let mounted="Mount";

        if (this.state.isHomeMounted) {
            mounted="Unmount";
            homeCmp = (
                <HomeComponent
                    name={'Harshit'}
                    initialAge={22}
                    greet={App.onGreet}
                    changeLink={this.changeLink.bind(this)}
                    initialLinkName={this.state.homeLink}

                />
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <HeaderComponent aboutLink={"About Us"} homeLink={this.state.homeLink}
                                         contactLink={"Contact Us"}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button className="btn btn-danger" onClick={this.onChangeHomeMounted.bind(this)}>{mounted} Home</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));

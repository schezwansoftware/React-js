import React from "react";


//stateless componennt
export const HeaderComponent = (props) => {

        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.homeLink}</a></li>
                            <li><a href="#">{props.aboutLink}</a></li>
                            <li><a href="#">{props.contactLink}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};
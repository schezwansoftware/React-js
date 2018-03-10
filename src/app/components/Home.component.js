import React from "react";

export class HomeComponent extends React.Component{
    render(){
        let vm = this.props;
        return(
            <div>
                <p>In a New COmponent!!</p>
                <p>Your Name is : {vm.name} {vm.lastname} </p>
                <p>You live in {vm.address} </p>
                <p> User Object => Name: {vm.user.name} </p>
                <div>
                    <h4> Hobbies </h4>
                    <ul>
                        {vm.user.hobbies.map((hobby) => <li> {hobby} </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}
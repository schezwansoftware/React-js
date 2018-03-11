import React from "react";

export class HomeComponent extends React.Component{
    constructor(props){
        super();
        this.state={
            age : props.initialAge,
            status:0,
            name:props.name
        };

        setTimeout(()=> this.setState(
            {
                status:this.state.status+1
            }
            ),3000)
    }

    onClick(){
        this.setState(
            {
                age:this.state.age +3,
            }
            );
    }
    render(){
        return(
            <div>
                <p>In a New Component!!</p>
                <p>Your Name is : {this.state.name} , your age is {this.state.age} </p>
                <p>Status: {this.state.status}</p>
                <button onClick={this.onClick.bind(this)} className="btn btn-primary">Make Me Older!</button>
            </div>
        );
    }
}

HomeComponent.propTypes={
    name:React.PropTypes.string,
    initialAge:React.PropTypes.number
};
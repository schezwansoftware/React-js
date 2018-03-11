import React from "react";

export class HomeComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            name: props.name,
            homeLink: props.initialLinkName
        };

        setTimeout(() => this.setState(
            {
                status: this.state.status + 1
            }
        ), 3000);
        console.log('Constructor');
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentWillReceiveProps() {
        console.log('component will receive props');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('should component update ', nextProps,nextState);
        if (nextState.status === 1){
            nextState.status=0;
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps,nextState) {
        console.log('component will update ',nextProps,nextState);
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('component will update ',prevProps,prevState);
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }


    onClick() {
        this.setState(
            {
                age: this.state.age + 3,
            }
        );
    }

    changeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleEvent(event) {
        this.setState(
            {
                homeLink: event.target.value
            }
        );

    }

    render() {
        return (
            <div>
                <p>In a New Component!!</p>
                <p>Your Name is : {this.state.name} , your age is {this.state.age} </p>
                <p>Status: {this.state.status}</p>
                <button onClick={this.onClick.bind(this)} className="btn btn-primary">Make Me Older!</button>
                <hr/>
                <button className="btn btn-warning btn-sm" onClick={this.props.greet}>Show Greetings</button>
                <hr/>
                <input type="text" value={this.state.homeLink} className="form-control"
                       onChange={(event) => this.onHandleEvent(event)}/>
                <button className="btn btn-success btn-sm" onClick={this.changeLink.bind(this)}>Show Greetings</button>
            </div>
        );
    }
}

HomeComponent.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    changeLink: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};
import React,{Component} from "react";

export default class AddAndReduce extends React.Component {
    constructor(props){
        super(props);
        this.state = {data:0};
        //this.add = this.add.bind(this);
    }
    add=()=> {
        let data = this.state.data;
        data++;
        this.setState({data});
    };

    reduce=()=> {
        let count = this.state.data;
        count--;
        this.setState({data:count});
    };
    render() {
        let data = this.props.data;
        return (
            <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.reduce}>-</button>
                {this.state.data}</div>
        )
    }
}

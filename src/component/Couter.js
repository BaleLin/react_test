import React,{Component} from 'react'
export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state={count:0};
        this.reduce = this.reduce.bind(this);

    }

    add=()=>{
        let currentNum=this.state.count;
        this.setState({count:currentNum+1});
        this.props.updateSum(1);
    }
    reduce(){
        let currentNum=this.state.count;
        this.setState({count:currentNum-1});
        this.props.updateSum(-1);

    }
    render() {
        return(
            <div>
                <button  onClick={this.add}>+</button>
                <button  onClick={this.reduce}>-</button>

                    <span>{this.state.count}</span>
            </div>
        );
    }

}

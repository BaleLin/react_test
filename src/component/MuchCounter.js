import React,{Component} from 'react'
import Counter from './Couter'

export default class MuchCounter extends Component {
    constructor(props) {
        super(props);
        this.state={summary:0};
    }
    updateSum=(num)=>{
         // let currentNum=this.state.summary;
         // this.setState({count:currentNum+num});
        this.setState(lastState=>({
            summary:lastState.summary+num
        }));
    }
    productMuchCouters(size){
        let counters=[];
        for (let i = 0; i < size; i++) {
            counters.push(<Counter updateSum={this.updateSum}/>);
        }
        return counters;
    }

    render(){
        return(
            <div class="group">
                {this.productMuchCouters(this.props.size)}
                <p>总数为 <span class="sum">{this.state.summary}</span></p>
            </div>

        )
    }
}

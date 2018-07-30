import React,{Component} from 'react'
import Counter from './Couter'

export default class MuchCounter extends Component {
    constructor(props) {
        super(props);
        this.state={summary:0};
    }
    calculate=(num)=>{
         let currentNum=this.state.summary;
         this.setState({summary:currentNum+num});
    }

   
    productMuchCouters(size){
        let counts = [];
        for(let i = 0; i<size;i++){
            counts.push(<Counter calculate={this.calculate}/>);
        }
        return counts;
    }
    render(){
        return(
            <div>

                <p>总数为 <span>{this.state.summary}</span></p>
                {this.productMuchCouters(this.props.size)}
            </div>

        )
    }
}

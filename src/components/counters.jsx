import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
   
    render() { 
        console.log('Counters - Rendered')
        const {onReset, counters, onIncrement, onDecrement, onDelete} = this.props;
        return ( 
            <div>
                <button 
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                { counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onReset={onReset}
                        counter={counter}
                    />
                ))}
           
            </div>);
    }
}
 
export default Counters;
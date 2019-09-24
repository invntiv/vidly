import NavBar from './components/navbar';
import './App.css';
// import Counters from "./components/counters";
import React, { Component } from 'react';
import Movies from './components/movies';

class App extends Component {

  state = { 
        counters: [
            {id: 1, value: 4 },
            {id: 2, value: 0 },
            {id: 3, value: 0 },
            {id: 4, value: 0 }
        ]
     }

     constructor() {
        super();
        console.log('App - Constructor');
     }

     componentDidMount() {
         console.log('App - Mounted');
    }

    handleDelete = (counterId) => {
        console.log('Event Handler Called', counterId);
        const counters = this.state.counters.filter( c => c.id !== counterId)
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters })
    };

    handleIncrement = counter => {
        console.log(counter)
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters })
    }
   
    handleDecrement = counter => {
        console.log(counter)
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        if (counters[index].value > 0) {
            counters[index].value--;
            this.setState({ counters })
        }  else {
            console.log("Cannot decrement past 0!")
        }
      
    }

    render(){
        console.log('App - Rendered');
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value >0).length} />
                <main className="container">
                <br/>
                <Movies/>
                {/*
                <Counters 
                    counters={this.state.counters}
                    onReset={this.handleReset} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} l
                    onDelete={this.handleDelete} 
                /> */}
                </main>
            </React.Fragment>
        );
    }
}

export default App;

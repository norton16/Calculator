import React, { Component } from 'react';
import './App.css';
import Result from './components/result/Result';
import Keypad from './components/keypad/Keypad';

class App extends Component {
    constructor(){
        super();
        this.state = {
            finalresult: ""
        }
    }

    calculate = () => {
      try {
        this.setState({
          finalresult: (eval(this.state.finalresult) || "") + ""
        })
      } catch (e) {
        this.setState({
          finalresult: "error"
        })
      }
    };
    
    reset = () => {
      this.setState({
        finalresult: ""
      })
    };
    
    backspace = () => {
      this.setState({
        finalresult: this.state.finalresult.slice(0, -1)
      })
    };
    
    onClick = button => {
      if (button === "=") {
        this.calculate()
      } else if (button === "C") {
        this.reset()
      } else if (button === "CE") {
        this.backspace()
      } else {
        this.setState({
          finalresult: this.state.finalresult + button
        })
      }
    };

    render() {
        return (
            <div>
              <div className='container'>
                <div className="calculator">
                    <Result result={this.state.finalresult}/>
                    <Keypad onClick={this.onClick}/>
                </div>
                </div>
            </div>
        );
    }
}

export default App;
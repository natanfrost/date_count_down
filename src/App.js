import './App.css';
import React, { Component } from 'react';
import Clock from './Clock';
import { Form, FormControl } from 'react-bootstrap';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';

class App extends Component {
    constructor(props){
        super(props);
        this.handleDateSelected = this.handleDateSelected.bind(this);
        this.state = {
            deadline: 'December 25, 2017',
            opacity: 0
        };        
    }

    handleDateSelected(e){                
        const month = new Date(e._d).toLocaleDateString('en-us', { month: 'long' });
        const day = new Date(e._d).toLocaleDateString('en-us', { day: '2-digit' });
        const year = new Date(e._d).toLocaleDateString('en-us', { year: 'numeric' });
        this.setState({opacity: 0});           
        this.setState({deadline: month + ' ' + day + ', ' + year});
    }

    render(){

        return (
            <Form inline>
                <div className="App-title"><strong>Countdown to {this.state.deadline}</strong></div>
                <div> 
                    <Clock deadline={this.state.deadline} />                                                         
                    <div>                        
                        <FormControl 
                            readOnly
                            className='Deadline-input'                         
                            value={this.state.deadline}
                            onClick={e => this.setState({opacity: 1})} 
                        />
                        <br></br>
                        <span>Click the input above to change deadline</span>                        
                        <div style={{opacity: this.state.opacity, transition: "opacity 1s"}}>                            
                            <Calendar onChange={this.handleDateSelected}/>                            
                        </div>                
                    </div>                    

                </div>
            </Form>
        )        
    }
}

export default App;
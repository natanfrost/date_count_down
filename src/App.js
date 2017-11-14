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
            showCalendar: false
        };        
    }

    handleClick(e){
        this.setState({deadline: this.state.newDeadline});
    }

    handleDateSelected(e){
        this.setState({showCalendar: false});           
              
        const month = new Date(e._d).toLocaleDateString('en-us', { month: 'long' });
        const day = new Date(e._d).toLocaleDateString('en-us', { day: '2-digit' });
        const year = new Date(e._d).toLocaleDateString('en-us', { year: 'numeric' });
        this.setState({deadline: month + ' ' + day + ', ' + year});
    }

    render(){
        return (
            <Form inline>
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <div> 
                    <Clock deadline={this.state.deadline} />                                                         
                    <div>
                        
                        <FormControl 
                            readOnly
                            className='Deadline-input'                         
                            value={this.state.deadline}
                            onClick={e => this.setState({showCalendar: true})} 
                        />
                        <div className={this.state.showCalendar ? '' : 'hidden'}>
                            <Calendar onChange={this.handleDateSelected}/>
                        </div>                
                    </div>                    

                </div>
            </Form>
        )        
    }
}

export default App;
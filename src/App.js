import './App.css';
import React, { Component } from 'react';
import Clock from './Clock';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';

class App extends Component {
    constructor(props){
        super(props);
        this.handleDateSelected = this.handleDateSelected.bind(this);
        this.state = {
            deadline: 'January 1, 2018',
            visibility: 'hidden',
            opacity: '0'
        };        
    }

    handleDateSelected(e){                
        const month = new Date(e._d).toLocaleDateString('en-us', { month: 'long' });
        const day = new Date(e._d).toLocaleDateString('en-us', { day: '2-digit' });
        const year = new Date(e._d).toLocaleDateString('en-us', { year: 'numeric' });
        this.setState({visibility:'hidden', opacity: '0'});
        this.setState({deadline: month + ' ' + day + ', ' + year});
    }

    render(){ 
        return (
            <div> 
                <div className="title"><strong>Countdown to {this.state.deadline}</strong></div>
                <div> 
                    <Clock deadline={this.state.deadline} />                                                         
                    <div>                                                
                        <i onClick={e => this.setState({visibility:'visible', opacity: '1'})}  className="fa fa-calendar fa-5x" aria-hidden="true"></i>
                        <br></br>
                        <span>(Click to change deadline)</span>                        
                        <div className={this.state.calendarVisibility}>                            
                            <Calendar 
                                onChange={this.handleDateSelected} 
                                style={{
                                    visibility: this.state.visibility, 
                                    opacity: this.state.opacity, 
                                    transition: "opacity 1s"
                                }}
                            />                            
                        </div>                
                    </div>                    

                </div>
            </div>
        )        
    }
}

export default App;
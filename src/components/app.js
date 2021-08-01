import React , { Component } from 'react';
import lancontext from '../context/lancontext';
import User from './user';
import './app.css'


export default class App extends Component{
    state = {lan : 'english'};

    onlanchange = lan => {
        this.setState({lan})  
    }
    render(){
        return(
            <div>
            <div className="select">
                <div>
                    <button className='english' onClick={()=> this.onlanchange('english')}>english</button>
                    <button className='farsi' onClick={()=> this.onlanchange('farsi')} >farsi</button>
                </div>
               
                <lancontext.Provider value={this.state.lan}>
               
               <User />
               </lancontext.Provider>
            </div>
            </div>
        )
    }
}
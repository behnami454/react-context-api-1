
import React, {Component } from 'react'
import lancontext from '../context/lancontext'
import './btn.css'

class Btn extends Component {
    static contextType = lancontext;

    render(){
         const text = this.context === 'english' ? 'Submit ' : 'بقرست'
        return (
            <button className="btni">{text}</button>
        )

        
    }

}

   

export default Btn
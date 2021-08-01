import React , { Component } from 'react'
import lancontext from '../context/lancontext'
import './field.css'

class Field extends Component{

    static contextType = lancontext
    render(){
        const text = this.context === 'english' ? 'Name ' : 'اسم'
        return(
            <div>
                <label className='lable'>{text}</label>
                <input />
            </div>
        
        )
    }
}

export default Field 
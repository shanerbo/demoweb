import React, { Component } from 'react';
import util from '../util'



export default class Contact extends Component {
    constructor(props){
        super(props);

        this.state={

        name:'',
        email:'',        
        message:'',    
        };
    }


    updateField(feild,value){
        this.setState({[field]: value});

    
    }
    
    
    
    
    render() {
        return(
            <div>
                {}
            <Field 
            onChange={(event)=>
                this.updateField('name',target.value)}
            value={this.state.name}        
            />


            </div>
    




        );

    }

}

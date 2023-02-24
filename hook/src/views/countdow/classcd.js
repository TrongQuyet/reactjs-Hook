import React from "react";
import { useState,useEffect } from 'react';

class Cdclass extends React.Component {

    state={
        time :10000
    };
    componentDidMount(){
    this.timer =   setInterval((time) => {
            this.setState({time:this.state.time-1});
        }, 1000); 
    }
    componentDidUpdate() {
        if( this.state.time === 0){
                clearInterval(this.timer);
                alert('stop') 
        }
    }
    render() {
        return (
            <div style={{color: 'white'}}>
               Class : {this.state.time}
            </div>
        )
    }

}

const Hookcd =()=> {
    let [time,setime] = useState(10000)

    useEffect(() => {
        if(time===0){
            return;
        }
        const interval =setInterval(() => {
            setime(time-1)
            }, 1000);
        return()=>{
            clearInterval(interval)
        }      
    },[time])
    return(
        <div style={{color: 'white'}}>
               Hook : {time}
            </div>
    )
}

export  {Cdclass,Hookcd}
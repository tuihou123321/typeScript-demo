import React,{ Component } from "react"
import PropTypes from "PropTypes"

interface HeaderProps{
    title:string;
    backgroundColor?:"white" | "deep";
}

class Button extends Component{
    render(){
        return (
             <div>11</div>
        )
    }
}


class Home extends Component{
    render(){
        return(
            <Header/>
        )
    }
}

export default Home;

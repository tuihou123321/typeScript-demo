import React,{ Component } from "react"

interface HeaderProps{
    title:string;
    backgroundColor?:"white" | "deep";
}

class Header extends Component<HeaderProps>{
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

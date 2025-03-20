
import React from "react"

class Student extends React.Component{

   
    render(){
       var {name}=this.props
        return <h1>{name} Student management system</h1>
    }
}

export default Student
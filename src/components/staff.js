import React from "react"
import Student from "./student"
import Employee from "./employee"
class Staff extends React.Component{
    render(){
          var value = "Thahseen"
          var obj={
            name:"Shankar",
            age:21
          }
        return <div>
        <h1>Staff management system</h1>
        <Student name={value} />
         <Employee  object = {obj} />
        </div>
               
    }
}

// function Staff(){
//     return <div>
//         <h1>Staff management system</h1>
//         <Student/>
//     </div>
// }

export default Staff
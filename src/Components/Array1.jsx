
import { Component } from "react";
import InputList from "./InputList";
import Table from "./Table";



class FormData extends Component{
constructor(props){
    super(props)

    this.state ={characters:[]}
}
   

handleSubmit =(character)=>{

    console.log(character,"datasss")

this.setState({characters:character})

}
    render(){

        const  {characters} = this.state
        
          
        return(
            <div>
               
         
                <Table charactersData={characters} />
                <InputList handleSubmitValue={this.handleSubmit}/>
            </div>
        )
    }
}

export default FormData

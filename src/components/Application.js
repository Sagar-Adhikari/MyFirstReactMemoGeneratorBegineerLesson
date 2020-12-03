import React,{Component} from "react"
class Application extends Component{
    constructor(){
        super()
        this.state = {
            loading:false,
            character:{}
        }

    }

    componentDidMount(){
        this.setState({loading:true})
        const url ='https://jsonplaceholder.typicode.com/todos/1';
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log('data:',data)
            this.setState({
                loading:false,
                character:data
            })
        })
        // .catch((err)=>console.log(err))
    }

    render(){
        const text =this.state.loading ? "loading....": this.state.character.title
        return(
            <div>
                {text}

            </div>
        )
    }

}

export default Application;
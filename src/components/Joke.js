import React from "react";

function Joke(props){
    return(
        <div>
            <h3 style ={{display:props.question? 'block':'none'}}>Questions:{props.question}</h3>
            <h3 style ={{color:!props.question && '#888888'}}>Answer:{props.punchline}</h3>
            <hr/>

        </div>
    )
}

export default Joke;
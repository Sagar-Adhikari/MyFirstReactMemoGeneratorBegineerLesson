import React from "react"

function Product(props){
    console.log('props:',props)
    return(
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price}
            -{props.product.description} </p>
        </div>
    )
}

export default Product
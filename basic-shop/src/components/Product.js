import { Component } from "react";
import Button from "./Button";

const styles = {
    product: {
        border: '1px solid #ccc',
        boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
        margin: '5px',
    },

    img: {
        width: '100%'
    },
}

class Product extends Component {
    render() {
        console.log(this.props);
        const {product, addToCart} = this.props
        return (
            <div style={styles.product}>
                <img style={styles.img} alt={product.name} src={product.img}/>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <Button onClick={()=>addToCart(product)}>
                    Agregar al carrito
                </Button>
            </div>
        );
    }
}

export default Product;
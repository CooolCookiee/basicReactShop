import { Component} from "react";
import Bubble from "./Bubble";
import CartDetails from "./CartDetails";

const styles = {
    carts: {
        backgroundColor: '#0a283e',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },

    bubble: {
        position: 'relative',
        left: 40,
        top: 0,
    }
}

class Cart extends Component {
    render() {
        const {cart, isCartVisible, showCart} = this.props;
        const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);
        return (
            <div>
                <span style={styles.bubble}>
                    {quantity !==0
                    ? <Bubble value={quantity}/>
                    : null}
                </span>
                <button onClick={showCart} style={styles.carts}>
                    <img src='/images/shopping-cart(1).png' alt="cart" width="30"/>
                </button>
                {isCartVisible ? <CartDetails cart={cart}/> : null}
            </div>
        );
    }
}

export default Cart;
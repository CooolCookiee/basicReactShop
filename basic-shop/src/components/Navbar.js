import { Component } from "react";
import Logo from "./Logo";
import Cart from "./Cart";

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px 20px',
        justifyContent: 'space-between',
        backgroundColor: '#0a283e',
        color: '#fff',
        position: 'relative',
    }
}

class Navbar extends Component {
    render() {
        const {cart, isCartVisible, showCart} = this.props;
        return (
            <nav style={styles.navbar}>
                <Logo/>
                <Cart cart={cart} isCartVisible={isCartVisible} showCart={showCart}/>
            </nav>
        );
    }
}

export default Navbar;
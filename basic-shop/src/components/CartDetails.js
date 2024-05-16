import { Component } from "react";

const styles = {
    CartDetails: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        marginTop: '30px',
        boxShadow: '1px 5px 5px rgba(0,0,0,0.1)',
        borderRadius: '5px',
        color: '#000',
        width: '30%',
        right: 0,
    },

    ul: {
        margin: 0,
        padding: 0,
    },

    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        padding: '10px 15px',
        borderBottom: '1px solid #aaa',
    }
}

class CartDetails extends Component {
    render() {
        const {cart} = this.props;
        return (
            <div style={styles.CartDetails}>
                <ul style={styles.ul}>
                    {cart.map (
                        x => 
                        <li style={styles.product} key={x.name}>
                            <img src={x.img} alt={x.name} width="50" height="32"/>
                            {x.name}
                            <span>{x.quantity}</span>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default CartDetails;
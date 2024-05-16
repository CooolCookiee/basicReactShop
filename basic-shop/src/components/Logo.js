import { Component } from "react";

const styles = {
    logo: {
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '20px 0',
        fontFamily: 'Times New Roman,Arial, sans-serif',
    }

}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                SHOP
            </div>
        );
    }
}

export default Logo;
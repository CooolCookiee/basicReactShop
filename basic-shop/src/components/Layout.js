import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0a283e',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

    container:{
        width: '70%',
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
import React, { Component } from 'react'

const styles = {
    wrapper : {
        backgroundColor: "#000",
        color : "#fff",
        padding: "30px",
        border : "5px solid red",
        borderRadius : "5px"
    },
}

export default class Component1 extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                Component1
            </div>
        );
    }
}


import React, { Component } from 'react'

const styles = {
    wrapper : {
        backgroundColor: "#fff",
        color : "#000",
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


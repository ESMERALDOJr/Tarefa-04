import React, { Component } from 'react';

class CompA extends Component {
    render() {
        return (

            <div>

                <h1>Nome: {this.props.nome}.</h1>

            </div>
        );
    }
}

export default CompA;
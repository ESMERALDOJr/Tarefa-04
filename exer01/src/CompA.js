import React from 'react';

class CompA extends React.Component {
    render() {
        return (

            <div>

                <h1>Olá, {this.props.nome} {this.props.sobrenome}.</h1>
                
            </div>

        );
    }
}

export default CompA;
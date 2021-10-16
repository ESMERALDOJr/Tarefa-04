import React from 'react';

class Vacina extends React.Component {
    render() {
        return (

            <div>

                <h1>{this.props.nome} é uma das vacinas contra a Covid-19.</h1>

            </div>
        );
    }
}

export default Vacina;
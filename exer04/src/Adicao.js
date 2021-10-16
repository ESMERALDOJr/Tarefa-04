import React from 'react';

class Adicao extends React.Component {
    render() {

        return (

            <div>

                <h1>
                    O resultado de {this.props.x} + {this.props.y} =
                    &nbsp;{this.props.x + this.props.y}
                </h1>

            </div>
        );
    }
}

export default Adicao;
import React from 'react';
class Spinner extends React.Component {

    state = { unmount: false };

    componentWillUnmount() {
        this.setState({unmount: true});
    }

    render() {
        return (
            <div className={'spinner-bg'} style={this.state.unmount ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                <div className="lds-heart"><div></div></div>
            </div>
        );
    };
}

export default Spinner;
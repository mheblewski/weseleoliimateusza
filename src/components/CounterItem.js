import React from 'react';

class CounterItem extends React.Component {

    render() {

        return (
            <div className='counter-item'>
                <p className='value'>{this.props.value}</p>
                <p className='description'>{this.props.description}</p>
            </div>
        );
    };
}

export default CounterItem;
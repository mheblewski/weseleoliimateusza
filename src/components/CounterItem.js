import React from 'react';

class CounterItem extends React.Component {

    render() {

        return (
            <div className='counter-item' data-aos="fade-up" data-aos-delay={this.props.delay}>
                <p className='value'>{this.props.value}</p>
                <p className='description'>{this.props.description}</p>
            </div>
        );
    };
}

export default CounterItem;
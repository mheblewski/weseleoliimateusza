import React from 'react';

class Title extends React.Component {

    render() {

        return (
            <div data-aos="fade-up" data-aos-delay={this.props.delay} className='title'>
                <p>{this.props.text}</p>
            </div>
        );
    };
}

export default Title;
import React from 'react';

class ParentsContactCard extends React.Component {

    render() {
        return (
            <div className='contact-card' data-aos="fade-left" data-aos-delay={this.props.delay} data-aos-anchor='.first-card'>
                <div className='parents-contact-text'>
                    <p className='parents-description'>{this.props.firstDescription}</p>
                    <p className='parents-phone'>{this.props.firstPhone}</p>
                    <p className='parents-description'>{this.props.secondDescription}</p>
                    <p className='parents-phone'>{this.props.secondPhone}</p>
                </div>
            </div>
        );
    };
}

export default ParentsContactCard;
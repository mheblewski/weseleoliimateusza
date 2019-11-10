import React from 'react';

class ContactCard extends React.Component {

    render() {
        return (
            <div className={`contact-card ${this.props.additionalClass}`} data-aos="fade-top" data-aos-delay={this.props.delay} data-aos-anchor='.first-card'>
                <img className='contact-image' src={this.props.image}></img>
                <div className='contact-text'>
                    <p className='description'>{this.props.description}</p>
                    <p className='name'>{this.props.name}</p>
                    <p className='phone'>{this.props.phone}</p>
                </div>
            </div>
        );
    };
}

export default ContactCard;
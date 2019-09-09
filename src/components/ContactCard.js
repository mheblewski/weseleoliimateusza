import React from 'react';
import 'aos/dist/aos.css';

class ContactCard extends React.Component {

    render() {
        return (
            <div className='contact-card'>
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
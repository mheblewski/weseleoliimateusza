import React from 'react';
import 'aos/dist/aos.css';

class ParentsContactCard extends React.Component {

    render() {
        return (
            <div className='contact-card'>
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
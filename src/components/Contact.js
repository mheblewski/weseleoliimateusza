import React from 'react';
import Title from './Title';
import ContactCard from './ContactCard';
import ParentsContactCard from './ParentsContactCard';

class Informations extends React.Component {

    render() {
        const img = process.env.PUBLIC_URL + "/images/dance.jpg";
        return (
            <div id='contact'>
                <Title text='Kontakt'/>
                <div className='contact'>
                    <div className='contact-bcg' style={{backgroundImage: `url(${img})`}} data-aos="fade-right" data-aos-anchor='.first-card'></div>
                    <div className='contact-cards'>
                        <ContactCard description='Panna Młoda' name='Aleksandra Niewiera' phone='+48 791 103 680' image={process.env.PUBLIC_URL + "/images/bride-icon.png"} delay='100' additionalClass='first-card'/>
                        <ContactCard description='Pan Młody' name='Mateusz Heblewski' phone='+48 609 261 411' image={process.env.PUBLIC_URL + "/images/groom-icon.png"} delay='200'/>
                        <ParentsContactCard firstDescription='Mama Panny Młodej' firstPhone='+48 555 555 555' secondDescription='Mama Pana Młodego' secondPhone='+48 888 888 888' delay='300'/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Informations;
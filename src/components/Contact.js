import React from 'react';
import 'aos/dist/aos.css';
import Title from './Title';
import ContactCard from './ContactCard';
import ParentsContactCard from './ParentsContactCard';

class Informations extends React.Component {

    render() {
        const img = process.env.PUBLIC_URL + "/images/counter-bg.jpg";
        return (
            <div id='contact'>
                <Title text='Kontakt'/>
                <div className='contact'>
                    <div className='contact-bcg' style={{backgroundImage: `url(${img})`}}></div>
                    <div className='contact-cards'>
                        <ContactCard description='Panna Młoda' name='Aleksandra Niewiera' phone='+48 791 103 680' image={process.env.PUBLIC_URL + "/images/bride-icon.png"}/>
                        <ContactCard description='Pan Młody' name='Mateusz Heblewski' phone='+48 609 261 411' image={process.env.PUBLIC_URL + "/images/groom-icon.png"}/>
                        <ParentsContactCard firstDescription='Mama Panny Młodej' firstPhone='+48 555 555 555' secondDescription='Mama Pana Młodego' secondPhone='+48 888 888 888'/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Informations;
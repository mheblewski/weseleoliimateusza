import React from 'react';
import Title from './Title';
import Counter from './Counter';
import OurStory from './OurStory';

class Informations extends React.Component {

    render() {
        const img = process.env.PUBLIC_URL + "/images/counter-bg.jpg";
        return (
            <div id='informations'>
                <Title text='Drodzy Goście...' />
                <div className='informations' data-aos="fade-up" data-aos-delay={this.props.delay}>
                   <p>
                    Mamy nadzieję, że tego dnia będziecie razem z nami.
                    Ceremonia ślubna odbędzie się w kościele pw. św. Tomasza
                    w Kietrzu, natomiast wesele i poprawiny w Domu Weselnym 
                    Rogożany. Dla przyjezdnych Gości zapewniamy nocleg.

                    Na poniższej stronie będziemy zamieszczać na bieżąco szczegóły
                    dotyczące uroczystości. Dodatkowo znajdą się tutaj zdjęcia 
                    i filmy z uroczystości zaraz po tym jak je otrzymamy. 
                    Serdecznie zachęcamy do potwierdzania obecności za pomocą
                    formularza dostępnego na stronie lub telefonicznie. 
                   </p>
                </div>
                <Counter />
                <OurStory />
            </div>
        );
    };
}

export default Informations;
import React from 'react';
import 'aos/dist/aos.css';
import Title from './Title';
import ContactCard from './ContactCard';
import Counter from './Counter';

class Informations extends React.Component {

    render() {
        const img = process.env.PUBLIC_URL + "/images/counter-bg.jpg";
        return (
            <div id='informations'>
                <Title text='Drodzy Goście...'/>
                <div className='informations'>
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
            </div>
        );
    };
}

export default Informations;
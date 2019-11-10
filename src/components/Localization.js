import React from 'react';
import Title from './Title';
import MapContainer from './MapContainer';

class Localization extends React.Component {

    render() {
        const markerChurch =  process.env.PUBLIC_URL + "/images/marker-church.png";
        const markerWedding =  process.env.PUBLIC_URL + "/images/marker-wedding.png";

        return (
            <div id='localization'>
                <Title text='Lokalizacja' />
                <div className='localization'>
                   <div className='left'>
                        <div className='localization-title localization-title-1' data-aos="fade-down" data-aos-delay={300} data-aos-anchor-placement="top-bottom">Ślub</div>
                        <a href="https://www.google.com/maps/dir//plac+bpa+Konrada+3,+48-130+Kietrz/@50.0804042,17.9962623,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47116515df7ed8d1:0x4c5eaf351c9463da!2m2!1d18.0006397!2d50.0804043!3e0?hl=pl-PL" target="_blank" >
                        <img className='marker' 
                            data-aos="fade-down" data-aos-delay={300} src={markerChurch} data-aos-anchor-placement="top-bottom" data-aos-anchor='.localization-title-1'></img>
                        </a>
                        <div className='localization-info' data-aos="fade-up" data-aos-delay={0} data-aos-anchor-placement="top-bottom" data-aos-anchor='.localization-title-1'>
                            <p>Kościół św. Tomasza Apostoła w Kietrzu</p>
                            <p>Plac Biskupa Konrada 3</p>
                        </div>
                   </div>
                   <div className='right'>
                        <div className='localization-title localization-title-2' data-aos="fade-down" data-aos-delay={300} data-aos-anchor-placement="top-bottom">Wesele</div>
                        <a href="https://www.google.com/maps/dir//Dom+Weselny+Rogo%C5%BCany,+Rogo%C5%BCany+63,+48-130+Rogo%C5%BCany/@50.0929464,17.9063787,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47117a59048dd5bd:0xa40f8267347e8293!2m2!1d17.9085674!2d50.0929464!3e0?hl=pl-PL" target="_blank" >
                        <img className='marker' 
                            data-aos="fade-down" data-aos-delay={300} src={markerWedding} data-aos-anchor-placement="top-bottom" data-aos-anchor='.localization-title-2'></img>
                        </a>
                        <div className='localization-info' data-aos="fade-up" data-aos-delay={0} data-aos-anchor-placement="top-bottom" data-aos-anchor='.localization-title-2'>
                            <p>Dom Weselny "Rogożany"</p>
                            <p>Rogożany 63</p>
                        </div>
                   </div>
                </div>
                <div className='map-container'>
                    <MapContainer />
                </div>
            </div>
        );
    };
}

export default Localization;
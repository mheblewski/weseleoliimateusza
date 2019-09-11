import React from 'react';
import Title from './Title';
import ParallaxBreak from './ParallaxBreak';

class OurStory extends React.Component {

    render() {
        const img = process.env.PUBLIC_URL + "/images/our-story.png";
        return (
            <div id='our-story'>
                <Title text='Nasza historia'/>
                <div className='our-story'>
                   <img src={img}></img>
                </div>
                <ParallaxBreak image = {process.env.PUBLIC_URL + "/images/break.jpg"} />
            </div>
        );
    };
}

export default OurStory;
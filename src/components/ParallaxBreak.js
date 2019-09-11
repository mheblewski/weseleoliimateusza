import React from 'react';
import ReactDOM from 'react-dom';

class ParallaxBreak extends React.Component {

    state = {
        offset: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }
 
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }

    parallaxShift = () => {
        const el = ReactDOM.findDOMNode(this);
        const y =  el.getBoundingClientRect().y - document.documentElement.clientHeight;
        this.setState({
            offset: -y - document.documentElement.clientHeight
        });
    };


    render() {
        const bgImg = this.props.image;
        return (
            <div id='parallax-break' style={{ backgroundPositionY: this.state.offset/2, backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '60vh' }}>
             </div>
        )
    };
}

export default ParallaxBreak;
import React from 'react';
import ReactDOM from 'react-dom';

class ParallaxBreak extends React.Component {

    state = {
        offset: 0,
        width: window.innerWidth, 
        height: window.innerHeight
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
        const isMobile = this.state.width < 1100;
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        let backgroundPosition = this.state.offset/2;
        if (isMobile) {
            backgroundPosition = 0;
        }

        var ua = window.navigator.userAgent;
        var isIE = /MSIE|Trident/.test(ua);

        if ( isIE ) {
            backgroundPosition = 'center';
        }

        return (
            <div id='parallax-break' style={{ backgroundPositionY: backgroundPosition, backgroundPositionX: 'center', backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '65vh' }}>
             </div>
        )
    };
}

export default ParallaxBreak;
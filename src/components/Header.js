import React from 'react';

class Header extends React.Component {

    state = { width: window.innerWidth, height: window.innerHeight };

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0
        };
        this.onLoad = props.onLoad;
    }

    componentDidMount() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
        this.setState({
            offset: window.pageYOffset,
            isArrowVisible: window.pageYOffset === 0
        });
    };

    render() {
        const image_web =  process.env.PUBLIC_URL + "/images/header1.png";
        const image_mobile = process.env.PUBLIC_URL + "/images/header_img_mobile.png";
        const isMobile = this.state.width < 480;
        const image = isMobile ? image_mobile :  image_web;

        return (
            <div 
            className='header' id='start'
            style={{ backgroundPositionY: this.state.offset/2, backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', maxHeight: '100vh', backgroundPosition: 'center 0'}}
          >
              <img onLoad={this.onLoad} src={image} style={{width: '100vw', maxWidth: '100%', height: 'auto', visibility: 'hidden'} }></img>
          </div>
        );
    };
}

export default Header;
import React from 'react';

class Header extends React.Component {

    constructor() {
        super()
    
        this.state = {
            offset: 0
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }
    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset,
            isArrowVisible: window.pageYOffset === 0
        });
    };

    render() {
        const image =  process.env.PUBLIC_URL + "/images/header.png";
        
        return (
            <div 
            className='header' id='start'
            style={{ backgroundPositionY: this.state.offset/2, backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', maxHeight: '100vh', backgroundPosition: 'center'}}
          >
              <img src={image} style={{width: '100vw', maxWidth: '100%', height: 'auto', visibility: 'hidden'}}></img>
              <a className='arrow' href="#informations" style={{visibility: this.state.isArrowVisible ? 'visible' : 'hidden'}}><span></span><span></span><span></span></a>
          </div>
        );
    };
}

export default Header;
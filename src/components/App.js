import React from 'react';
import Header from './Header';
import Informations from './Informations';
import Contact from './Contact';
import TopBar from './TopBar';
import TopBarMobile from './TopBarMobile';
import Footer from './Footer';
import Localization from './Localization';
import Spinner from './Spinner';
import AOS from 'aos';

class App extends React.Component {

    state = { contentLoaded: false, width: 0, height: 0 };

    onLoad = () => {
        console.log('app')
        this.setState({contentLoaded: true});
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidUpdate = () => {
        AOS.init({
            duration : 600
        })
    }

    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    render() {
        const isMobile = this.state.width < 1100;
        return (
            <div>
                {/* {this.state.contentLoaded ? null :  */}
                    <Spinner onTransitionEnd={this.transitionEnd} mounted={!this.state.contentLoaded}/>
                {/* } */}
                <div style={this.state.contentLoaded ? {} : {display: 'none'}} className='content'>
                    { isMobile ? <TopBarMobile /> : <TopBar /> }
                    <Header onLoad={this.onLoad}/>
                    <Informations />
                    <Localization />
                    <Contact />
                    <Footer />
                </div>
            </div>
        );
    };
}

export default App;
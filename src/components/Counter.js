import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import CounterItem from './CounterItem';

class Counter extends React.Component {

    state = {
        width: window.innerWidth, 
        height: window.innerHeight,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        offset: 0
    }

    weddingDate = new Date('Aug 29, 2020 15:30:00 GMT+0100').getTime();

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
        window.addEventListener('resize', this.updateWindowDimensions);
        setInterval( () => {
            const now = new Date().getTime();
            const distance = this.weddingDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.setState({
                days,
                hours,
                minutes,
                seconds
            });
        }, 1000);
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
            offset: -y - document.documentElement.clientHeight,
            isArrowVisible: window.pageYOffset === 0
        });
    };


    render() {
        const { days, hours, minutes, seconds } = this.state;
        const bgImg = process.env.PUBLIC_URL + "/images/counter-bg3.jpg";
        const isMobile = this.state.width < 1100;
        const backgroundPosition = isMobile ? 0 : this.state.offset/2;
        return (
            <div id='counter' style={{ backgroundPositionY: backgroundPosition, backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center 0' }}>
                 <Title text='Do naszego ślubu pozostało:' />
                 <div className='counter-container'>
                     <div className='counter'>
                         <CounterItem value={days} description='dni' delay='50' />
                         <CounterItem value={hours} description='godzin' delay='150' />
                         <CounterItem value={minutes} description='minut' delay='250' />
                         <CounterItem value={seconds} description='sekund' delay='350' />
                     </div>
                 </div>
             </div>
        )
    };
}

export default Counter;
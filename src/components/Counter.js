import React from 'react';
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';
import Title from './Title';
import CounterItem from './CounterItem';

class Counter extends React.Component {

    state = {
        days: 300,
        hours: 14,
        minutes: 15,
        seconds: 16,
        offset: 0
    }
    
    weddingDate = new Date('Aug 29, 2020 00:00:00').getTime();

    constructor() {
        super()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
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
    }

    parallaxShift = () => {
        const el = ReactDOM.findDOMNode(this);
        const y =  el.getBoundingClientRect().y - document.documentElement.clientHeight;
        this.setState({
            //offset: y < 0 ? Math.abs(y) : 0,
            offset: -y - document.documentElement.clientHeight,
            isArrowVisible: window.pageYOffset === 0
        });
    };


    render() {

        const { days, hours, minutes, seconds } = this.state;
        const bgImg = process.env.PUBLIC_URL + "/images/counter-bg3.jpg";
        return (
            <div id='counter' style={{ backgroundPositionY: this.state.offset/2, backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                 <Title text='Do naszego ślubu pozostało:'/>
                 <div className='counter-container'>
                     <div className='counter'>
                         <CounterItem value={days} description='dni' />
                         <CounterItem value={hours} description='godzin' />
                         <CounterItem value={minutes} description='minut' />
                         <CounterItem value={seconds} description='sekund' />
                     </div>
                 </div>
             </div>
        )

        // const leftCorner =  process.env.PUBLIC_URL + "/images/eucalyptus-left-corner.png";
        // const rightCorner = process.env.PUBLIC_URL + "/images/eucalyptus-right-corner.png";

        // return (
        //     <div id='counter'>
        //         <Title text='Do naszego ślubu pozostało:'/>
        //         <div className='counter-container'>
        //             <img className='left-corner' src={leftCorner}></img>
        //             <div className='counter'>
        //                 <CounterItem value={days} description='dni' />
        //                 <CounterItem value={hours} description='godzin' />
        //                 <CounterItem value={minutes} description='minut' />
        //                 <CounterItem value={seconds} description='sekund' />
        //             </div>
        //             <img className='right-corner' src={rightCorner}></img>
        //         </div>
        //     </div>
        // );
    };
}

export default Counter;
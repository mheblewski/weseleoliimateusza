import React from 'react';
import 'aos/dist/aos.css';

class Title extends React.Component {

    render() {

        return (
            <div className='title'>
                <p>{this.props.text}</p>
            </div>
        );
    };
}

export default Title;
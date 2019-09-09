import React from 'react';
import Header from './Header';
import Informations from './Informations';
import Contact from './Contact';
import TopBar from './TopBar';

class App extends React.Component {

    render() {
        return (
            <div>
                <TopBar />
                <Header />
                <Informations />
                <Contact />
            </div>
        );
    };
}

export default App;
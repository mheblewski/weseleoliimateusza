import React from 'react';
import Header from './Header';
import Informations from './Informations';
import Contact from './Contact';
import TopBar from './TopBar';
import Footer from './Footer';

class App extends React.Component {

    render() {
        return (
            <div>
                <TopBar />
                <Header />
                <Informations />
                <Contact />
                <Footer /> 
            </div>
        );
    };
}

export default App;
import React from 'react';

class TopBar extends React.Component {
    
    state = { sticked: true, currentNavElement: 'start' };
    navElementsMap = new Map([
        // ['start', 'Start'], 
        ['informations', 'Informacje'],
        ['localization', 'Lokalizacja'],
        ['contact', 'Kontakt']
    ]);

    isCurrentNavElement(name) {
        return this.state.currentNavElement === name;
    }

    getNavElements() {
        const navElements = [];
        this.navElementsMap.forEach((nameToShow, key) => {
            navElements.push(<li key={key}><a href={`#${key}`} className={`menu-item ${this.isCurrentNavElement(key) ? 'current' : null}`}>{nameToShow}</a></li>)
        });
        return navElements;
    }

    processSticked(position) {
        if (position !== 0) {
            if(!this.state.sticked) {
                this.setState({sticked: true});
            }
        } else {
            this.setState({sticked: true});
        }
    }

    processCurrentElement(position) {
        
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const position = window.scrollY;
            this.processSticked(position);
        });
    }

    render() {
        const navElements = this.getNavElements();

        return (
            <div className='menu'>
                <div className ={`menu-background ${this.state.sticked ? 'sticked' : null}`}></div>
                <div className='top-bar'>
                    <a href={'#start'} className='logo'>
                        Aleksandra <mark className='gold'>&#9825;</mark> Mateusz
                    </a>
                    <nav className= 'menu-container'>
                        <ul>
                            { navElements }
                        </ul>
                    </nav>
                </div>
            </div>
        );
    };
}

export default TopBar;
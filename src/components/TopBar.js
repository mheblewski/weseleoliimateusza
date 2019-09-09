import React from 'react';

class TopBar extends React.Component {
    
    state = { sticked: false, currentNavElement: 'start' };
    navElementsMap = new Map([
        ['start', 'Start'], 
        ['informations', 'Informacje'],
        ['contact', 'Kontakt'], 
        ['localization', 'Lokalizacja']
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
            this.setState({sticked: false});
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
                    <div className='logo'>
                        Aleksandra <mark className='gold'>&#9825;</mark> Mateusz
                    </div>
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
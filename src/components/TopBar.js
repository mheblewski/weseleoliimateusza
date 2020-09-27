import React from 'react';

class TopBar extends React.Component {
    
    state = {
        sticked: true,
        list: [
          { key: 'informations', isCurrent: false },
          { key: 'contact', isCurrent: false }
        ]
      };
    navElementsMap = new Map([
        // ['start', 'Start'], 
        ['informations', 'Informacje'],
        ['contact', 'Kontakt']
    ]);
    timer = null;
    autoScroll = false;

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll = () => {
        if(this.timer !== null) {
            clearTimeout(this.timer);        
        }
        this.timer = setTimeout(() => {
            this.autoScroll = false;
        }, 150);
        if (this.autoScroll) {
            return;
        }
        const pageOffset = window.pageYOffset;
        this.setState(state => {
            const list = state.list.map(({key, current}) => {
                let section = document.querySelector(`#${key}`);
                const sectionOffset = [section.offsetTop, section.offsetTop + section.offsetHeight];
                const isCurrent = sectionOffset[0] <= pageOffset && sectionOffset[1] > pageOffset;
                return {key, isCurrent};
            });
            return { list };
        });
    }

    onClick(key) {
        this.autoScroll = true;
        this.setCurrentElement(key);
    }

    setCurrentElement = (k) => {
        this.setState(state => {
            const list = state.list.map(({key, isCurrent}) => {
                const current = k === key;
                return {key, isCurrent: current};
            });

            return { list };
        });
        
    }

    getNavElements() {
        const navElements = [];
        
        this.state.list.forEach(({key, isCurrent}) => {
            const nameToShow = this.navElementsMap.get(key);
            navElements.push(
                <li key={key}>
                    <a href={`#${key}`} onClick={this.onClick.bind(this, key)} className={`menu-item ${isCurrent ? 'current' : null}`}>
                        {nameToShow}
                    </a>
                </li>
            )
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
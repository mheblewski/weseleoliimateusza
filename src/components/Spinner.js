import React from 'react';
class Spinner extends React.Component {

    state = { unmount: false };

    constructor(props) {
        super(props)
        this.transitionEnd = this.transitionEnd.bind(this)
        this.unMountStyle = this.unMountStyle.bind(this)
        this.state ={
          show: true,
          style :{
            opacity: 1
          }
        }
      }

      componentWillReceiveProps(newProps) {
        console.log(newProps);
        if(!newProps.mounted) {
            return this.unMountStyle()
        }
        this.setState({
          show: true
        })
        setTimeout(this.mountStyle, 10)
      }

      unMountStyle() { 
        this.setState({
          style: {
            //TODO
          },
          bgStyle: {
            opacity: '0',
            transition: 'all 1.5s ease',
          }
        })
      }
      
      
      transitionEnd(){
        if(!this.props.mounted){
            console.log('unmounted')
            this.setState({
            show: false
          })
        }
      }

    render() {
        return (
            this.state.show && <div className={'spinner-bg'} style={this.state.bgStyle} onTransitionEnd={this.transitionEnd}>
                <div className="lds-heart" style={this.state.style}><div></div></div>
            </div>
        );
    };
}

export default Spinner;
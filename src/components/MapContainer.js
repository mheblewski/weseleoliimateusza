import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        width: window.innerWidth, 
        height: window.innerHeight
      };

      componentDidMount() {
          this.setState({ width: window.innerWidth, height: window.innerHeight });
          window.addEventListener('resize', this.updateWindowDimensions);
      }
      componentWillUnmount() {
          window.removeEventListener('resize', this.updateWindowDimensions);
      }
      updateWindowDimensions = () => {
          this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    render() {
        let mapZoom = 13;
        let markerSize = 80;
        if (this.state.width < 720) {
            mapZoom = 12.5;
            markerSize = 60;
        }
        if (this.state.width < 520) {
            mapZoom = 12;
            markerSize = 50;
        }
        if (this.state.width < 420) {
            mapZoom = 11.5;
            markerSize = 40;
        }
        if (this.state.width < 310) {
            mapZoom = 11;
            markerSize = 30;
        }
        const style = {
            width: '100%',
            maxWidth: '100%',
            height: '65vh'
        }

        const markerChurch =  process.env.PUBLIC_URL + "/images/marker-church.png";
        const markerWedding =  process.env.PUBLIC_URL + "/images/marker-wedding.png";
        return (
            <Map
                mapTypeControl={false}
                fullscreenControl={false}
                scrollwheel={false}
                zoomControl={true}
                google={window.google}
                style={style}
                initialCenter={{
                lat: 50.092173,
                lng: 17.957561
                }}
                zoom={mapZoom}
                onClick={this.onMapClicked}
            >
                <Marker
                    title={'Wesele'}
                    name={'Dom Weselny \"Rogożany\"'}
                    position={{lat: 50.093018, lng: 17.908757}} 
                    onClick={this.onMarkerClick}
                    icon={{
                        url: markerWedding,
                        anchor: new window.google.maps.Point(markerSize/2, markerSize),
                        scaledSize: new window.google.maps.Size(markerSize, markerSize)
                        }} 
                />
                <Marker
                    title={'Ślub'}
                    name={'Kościół św. Tomasza Apostoła w Kietrzu'}
                    position={{lat: 50.080402, lng: 18.000644}}
                    onClick={this.onMarkerClick}
                    icon={{
                        url: markerChurch,
                        anchor: new window.google.maps.Point(markerSize/2, markerSize),
                        scaledSize: new window.google.maps.Size(markerSize, markerSize)
                        }} 
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                        <div style={{textAlign: 'center'}}>
                            <h1>{this.state.selectedPlace.title}</h1>
                            <h2>{this.state.selectedPlace.name}</h2>
                        </div>
                </InfoWindow>
                </Map>
                
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCKfYcX2NExxNiQIC6HhFDwq-sPT9n6Of4',
  language: 'pl'
})(MapContainer)
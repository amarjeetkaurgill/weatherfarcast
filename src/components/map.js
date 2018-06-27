import React, {Component} from 'react';

class GoogleMap extends Component {
  ComponentDidMount() {
    new google.maps.map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      <div ref="map"></div>
    );
  }
}

export default GoogleMap;

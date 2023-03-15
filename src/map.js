import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "400px",
  height: "400px"
};

export class MapContainer extends Component {
  render() {
    console.log(this.props.latitude, this.props.longitude, "----");

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.props.latitude,
          lng: this.props.longitude
        }}
      >
        <Marker name={"Current Location of Bus"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDFk_zbgj1bHkg4yAJ2XWLLyMBl1jAwQGA"
})(MapContainer);

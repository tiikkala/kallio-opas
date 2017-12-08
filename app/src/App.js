import React, { Component } from 'react';
import 'leaflet'

class App extends Component {
  render() {

    let map = L.map('map', {
      center: [60.184, 24.956],
      zoom: 14
    });

    return (
    <div>{map}</div>
    );
  }
}

export default App;

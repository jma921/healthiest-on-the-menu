import React, { Component } from 'react';
import {
  getRestaurantAtLocation,
  getRestaurantImage,
  getRestaurantDetails
} from './helpers/location';
import { getTimeOfDay } from './helpers/time';
import { reduceMenuItem } from './helpers/helpers';
import MenuItemContainer from './components/MenuItemContainer';
import fb from './config/base';
// import firebase from 'firebase';
import logo from './logo.svg';
// import './App.css';
import './grid.css';

import hamburger from './images/bk_chicken_salad.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: {},
      menuItem: {},
      imgUrl: '',
      locationLink: '',
      noResults: false,
      restraunt: {}
    };
    this.geolocationError = this.geolocationError.bind(this);
    this.geolocationSuccess = this.geolocationSuccess.bind(this);
    this.getMenuItem = this.getMenuItem.bind(this);
  }
  componentDidMount() {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
        this.geolocationSuccess,
        this.geolocationError,
        { enableHighAccuracy: true }
      );
    } else {
      /* geolocation IS NOT available */
      alert('Location not enabled.');
      this.setState({
        loading: false,
        location: false
      });
    }
  }
  geolocationError() {
    alert('No Location Data Available');
  }
  geolocationSuccess(position) {
    const { latitude, longitude } = position.coords;
    console.log(position);
    this.setState({
      locationLink: `https://www.google.com/maps/place/${latitude},${longitude}`
    });
    getRestaurantAtLocation(latitude, longitude)
      .then(data => {
        if (!data) {
          console.log('no data');
          return;
        }
        if (data.status === 'ZERO_RESULTS') {
          console.log('status ZERO_RESULTS');
          this.setState({
            noResults: true
          });
          return;
        }
        const { name } = data.result;
        const location = name.replace('/', '-');
        console.log(location);
        this.getMenuItem(location);
        this.setState({
          data,
          loading: false,
          location: true
        });
      })
      .then(() => {
        console.log(this.state.data.result.place_id);
        getRestaurantDetails(this.state.data.result.place_id).then(data => {
          this.setState({ restraunt: data });
        });
      });
  }
  getMenuItem(location) {
    const timeOfDay = getTimeOfDay();

    fb
      // .database()
      .ref('/restraunts/' + location)
      .once('value')
      .then(snapshot => {
        if (!snapshot.val()) {
          console.log('no data');
          return null;
        }
        if (timeOfDay < 10 && timeOfDay > 4) {
          const menuItem = reduceMenuItem(snapshot.val().breakfast);
          this.setState({
            menuItem
          });
        } else {
          const meals = snapshot.val().meals;
          const keys = Object.keys(meals);
          const randomKey = keys[Math.floor(Math.random() * keys.length)];
          const menuItem = reduceMenuItem(meals[randomKey]);
          this.setState({
            menuItem
          });
        }
      });
  }
  render() {
    if (this.state.loading) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <MenuItemContainer
              sideImage={this.state.menuItem.image}
              menuItem={this.state.menuItem}
              restraunt={this.state.restraunt}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;

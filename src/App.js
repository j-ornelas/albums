import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';
import AlbumList from './components/AlbumList.js';

class App extends Component {
  state = { loggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAoRqaGhCrf_8EWQEa_qiBe1IGCwaWA1CI',
      authDomain: 'auth-71b1a.firebaseapp.com',
      databaseURL: 'https://auth-71b1a.firebaseio.com',
      projectId: 'auth-71b1a',
      storageBucket: 'auth-71b1a.appspot.com',
      messagingSenderId: '174158281639'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  handleLogin() {
    if (!this.state.loggedIn) {
      return (
        <View style={styles.backgroundStyle}>
          <Header headerText='Auth' />
          <LoginForm />
        </View>
      );
    } else {
      return (
        <View style={styles.backgroundStyle}>
          <Header headerText='Albums' />
          <AlbumList />
        </View>
      );
    }
  }

  render() {
     return this.handleLogin();
   }
}

const styles = {
  backgroundStyle: {
    backgroundColor: 'whitesmoke'
  }
};

export default App;

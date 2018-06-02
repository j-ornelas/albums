import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    message: '',
    loading: false
  };

  renderButton() {
    if (this.state.loading){
      return <Spinner size="small" />
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
  }

  onButtonPress() {
    this.setState({message:'', loading: true, password: ''});



    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this, 'you are logged in!'))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this, 'you created an account!'))
          .catch((error) => {this.onLoginFail.call(this, error)})
    });
  }

  onLoginFail(error) {
    this.setState({
      message: error.code,
      loading: false
    })
  }

  onLoginSuccess(message) {
    this.setState({
      email: '',
      password: '',
      loading: false,
      message: message
    });
  }

  render() {
    const { alertStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="example@example.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email:email})}
            style={{ width:100, height:20}}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="p455w0rd"
            label="Password"
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => this.setState({password:password})}
            style={{ width:100, height:20}}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <Text style={alertStyle}>{this.state.message}</Text>

      </Card>
    );
  }
}

const styles = {
  alertStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;

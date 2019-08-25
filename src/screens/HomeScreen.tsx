import React from 'react';
import { Button } from "react-native";
import Config from "react-native-config";
import { Client } from 'bugsnag-react-native';

const bugsnag : Client = new Client(Config.BUGSNAG_KEY);

export class HomeScreen extends React.Component<any,any> {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => {
          navigate('Options', {name: 'Jane'})
        }}
      />
    );
  }
}

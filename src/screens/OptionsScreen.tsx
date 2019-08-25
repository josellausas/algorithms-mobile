import React from 'react';
import { Button } from "react-native";

export class OptionsScreen extends React.Component<any,any> {
  static navigationOptions = {
    title: 'Options',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Home"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
    );
  }
}

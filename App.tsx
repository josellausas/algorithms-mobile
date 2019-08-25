import React, {Fragment} from 'react';
import { HomeScreen } from "./src/screens/HomeScreen";
import { OptionsScreen } from "./src/screens/OptionsScreen";

import {createStackNavigator, createAppContainer} from 'react-navigation';

const screens = {
  Home: {screen: HomeScreen},
  Options: {screen: OptionsScreen},
}
const navOptions = { initialRouteName: "Home" };
const AppNavigator = createStackNavigator(screens, navOptions);
const AppContainer = createAppContainer(AppNavigator)


interface AppProps {}
interface AppState {}
class App extends React.Component<AppProps,AppState> {
  usingHermes: boolean;
  
  constructor(props:AppProps){
    super(props);
    this.usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  }
  
  render() {
    return <AppContainer />
  }
};

export default App;

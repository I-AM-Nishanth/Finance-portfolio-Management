import React from 'react';

// 3rd party libraries
import {
  Actions,
  Router,
  Scene,
  // Reducer,
} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import StockActions from './app/actions/stock-action';


// Views
import MainView from './app/views/main';
import SettingsView from './app/views/settings';
import AddView from './app/views/add';
import HomeView from './home';


// @todo remove when RN upstream is fixed
console.ignoredYellowBox = [
  'Warning: In next release empty section headers will be rendered.',
  'Warning: setState(...): Can only update a mounted or mounting component.',
];

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
        <Scene key="home" title="Home" component={HomeView} initial={true} />
    <Scene key="main" title="Main" direction="vertical" component={MainView}  />
    <Scene key="settings" direction="vertical" title="Stocks" component={SettingsView} />
    <Scene key="add" direction="vertical" title="Add" component={AddView} />
  </Scene>
);

export default class Period extends React.Component {

 componentWillUnmount() {
  for(i=0;i<5;i++){
    alert(i);
    console.log(i);
  StockActions.addStock('GOOG');
    Actions.pop(); 
  }
     }

  render() {

    return  <Router scenes={scenes} />;
  }
}

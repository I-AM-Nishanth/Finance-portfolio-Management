import {
  AppRegistry,
  StatusBar,
} from 'react-native';
import home from './home';

StatusBar.setBarStyle('light-content', true);




AppRegistry.registerComponent('home', () => home);

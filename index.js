/**
 * @format
 */

import 'react-native-gesture-handler';
import './i18n';
import {AppRegistry} from 'react-native';
import App from './App/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 * @flow
 */

import { Navigation } from 'react-native-navigation'
import App from '../../App'
import Home from '../screens/home'
import All from '../screens/surah/All'
import Single from '../screens/surah/Single'
import { name as appName } from '../../app.json'

Navigation.registerComponent(appName, () => App)
Navigation.registerComponent('home', () => Home)
Navigation.registerComponent('all', () => All)
Navigation.registerComponent('single', () => Single)

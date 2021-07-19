/**
 * @format
 * @flow
 */

import { Navigation } from 'react-native-navigation'
import './src/navigator/RegisterComponents'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'home',
              options: {
                topBar: {
                  visible: false
                }
              }
            }
          }
        ]
      }
    }
  })
})

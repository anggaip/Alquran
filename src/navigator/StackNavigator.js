/**
 * @format
 * @flow
 */

import { Navigation } from 'react-native-navigation'

export const navigationPush = (componentId: string, newComponent: Object) => {
  Navigation.push(componentId, {
    component: {
      name: newComponent.name,
      options: {
        topBar: {
          title: {
            text: newComponent.title.text
          },
          background: {
            color: {
              light: '#ffffff',
              dark: 'rgb(33, 35, 41)'
            }
          }
        }
      }
    }
  })
}

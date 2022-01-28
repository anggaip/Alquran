/**
 * @format
 * @flow
 */

import * as React from 'react'
import { useColorScheme } from 'react-native'
import { View, Colors } from 'react-native-ui-lib'
import EStyleSheet from 'react-native-extended-stylesheet'

type Props = {
  style?: Object,
  children: React.Node
};

const MyView = (props: Props): React.Node => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View flex useSaveArea style={setColorScheme(isDarkMode)}>
      <View {...props}>{props.children}</View>
    </View>
  )
}

function setColorScheme (isDarkMode: boolean): Object {
  if (isDarkMode) {
    return styles.darkMode
  }

  return styles.lightMode
}

export default MyView

const styles = EStyleSheet.create({
  darkMode: {
    backgroundColor: 'rgb(33, 35, 41)'
  },
  lightMode: {
    backgroundColor: '#ffffff'
  },
  view: {
    flex: 1,
    flexDirection: 'column'
  }
})

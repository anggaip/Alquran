/**
 * @format
 * @flow
 */

import * as React from 'react'
import { Text, useColorScheme } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

type Props = {
  text: string,
  style: Object
};

const MyText = (props: Props): React.Node => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Text style={[setColorScheme(isDarkMode), props.style]}>{props.text}</Text>
  )
}

function setColorScheme (isDarkMode: boolean): Object {
  if (isDarkMode) {
    return styles.darkMode
  }

  return styles.lightMode
}

export default MyText

const styles = EStyleSheet.create({
  darkMode: {
    color: 'rgb(249, 249, 249)'
  },
  lightMode: {
    color: '#000000'
  }
})

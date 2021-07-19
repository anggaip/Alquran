/**
 * @format
 * @flow
 */

import * as React from 'react'
import { TouchableHighlight } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import MyText from '../Text'

type Props = {
  style?: Object,
  fontStyle?: Object,
  title: string,
  onPress: Function
};

const MyButton = (props: Props): React.Node => {
  return (
    <TouchableHighlight
      style={[styles.button, props.style]}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={props.onPress}>
      <MyText text={props.title} style={[styles.title, props.fontStyle]} />
    </TouchableHighlight>
  )
}

export default MyButton

const styles = EStyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: '5rem',
    borderRadius: 5,
    margin: '5rem'
  },
  title: {
    color: '#ffffff',
    fontSize: '12rem'
  }
})

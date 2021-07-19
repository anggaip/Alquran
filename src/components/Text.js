/**
 * @format
 * @flow
 */

import * as React from 'react'
import { Text } from 'react-native'

type Props = {
  text: string,
  style: Object
};

const MyText = (props: Props): React.Node => {
  return <Text style={props.style}>{props.text}</Text>
}

export default MyText

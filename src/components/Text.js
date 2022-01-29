/**
 * @format
 * @flow
 */

import * as React from 'react'
import { Text } from 'react-native-ui-lib'

type Props = {
  text: string,
  style: Object,
  fontStyle: ?Object
};

const MyText = (props: Props): React.Node => {
  return (
    <Text {...props} style={props.fontStyle}>
      {props.text}
    </Text>
  )
}

export default MyText

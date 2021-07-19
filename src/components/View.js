/**
 * @format
 * @flow
 */

import * as React from 'react'
import { SafeAreaView, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

type Props = {
  style?: Object,
  children: React.Node
};

const MyView = (props: Props): React.Node => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.view, props.style]}>{props.children}</View>
    </SafeAreaView>
  )
}

export default MyView

const styles = EStyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column'
  }
})

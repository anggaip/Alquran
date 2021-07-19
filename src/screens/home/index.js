/**
 * @format
 * @flow
 */

import * as React from 'react'
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { navigationPush } from '../../navigator/StackNavigator'
import { MyView, MyButton, MyText } from '../../components/Custom'

type Props = {
  componentId: string
};

class Home extends React.Component<Props> {
  render (): React.Node {
    const { width, height } = Dimensions.get('window')
    const realWidth = Math.min(width, height)
    EStyleSheet.build({ $rem: realWidth / 360 })

    return (
      <MyView style={styles.wrapping}>
        <MyText style={styles.content} text="Konten" />
        <MyButton title="Baca Al qur'an" onPress={this.pressReadQuranButton} />
      </MyView>
    )
  }

  pressReadQuranButton = () => {
    const allSurahComponent = this.buildAllSurahComponent()
    navigationPush(this.props.componentId, allSurahComponent)
  };

  buildAllSurahComponent (): Object {
    return {
      name: 'all',
      title: {
        text: "Baca Al Qur'an"
      }
    }
  }
}

export default (Home: React.AbstractComponent<Props>)

const styles = EStyleSheet.create({
  wrapping: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
  },
  content: {
    fontSize: '14rem'
  }
})

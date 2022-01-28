/**
 * @format
 * @flow
 */

import * as React from 'react'
import { Dimensions } from 'react-native'
import {
  View,
  Text,
  Typography,
  Colors,
  Image,
  Assets
} from 'react-native-ui-lib'
import EStyleSheet from 'react-native-extended-stylesheet'
import { navigationPush } from '../../navigator/StackNavigator'
import { MyView, MyButton } from '../../components/Custom'

type Props = {
  componentId: string
};

Typography.loadTypographies({
  h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
  h3: { fontSize: 28, fontWeight: '700', lineHeight: 42 }
})

Colors.loadColors({
  dark: '#091945'
})

Colors.loadSchemes({
  light: {
    screenBG: 'transparent',
    textColor: Colors.grey20,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50
  },
  dark: {
    screenBG: Colors.dark,
    textColor: Colors.white,
    moonOrSun: Colors.grey80,
    mountainForeground: Colors.violet10,
    mountainBackground: Colors.violet20
  }
})

Assets.loadAssetsGroup('images', {
  quranMain: require('Alquran/src/assets/images/quran_main.png')
})

class Home extends React.Component<Props> {
  render (): React.Node {
    const { width, height } = Dimensions.get('window')
    const realWidth = Math.min(width, height)
    EStyleSheet.build({ $rem: realWidth / 360 })

    return (
      <MyView flex style={styles.wrapping} bg-screenBG>
        <View center paddingT-80 paddingB-50>
          <Text h3 textColor style={{ fontFamily: 'Poppins-Regular' }} marginB-10>
            Quran App
          </Text>
          <Text
            center
            textColor
            style={{
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              lineHeight: 22
            }}>
            {'Learn Quran and \nRecite once everyday'}
          </Text>
        </View>
        <View flex-2>
          <Image
            assetName={'quranMain'}
            assetGroup={'images'}
            style={{
              width: 314,
              height: 450
            }}
          />
          <MyButton
            title="Get Started"
            onPress={this.pressReadQuranButton}
            style={{
              backgroundColor: '#F9B091',
              position: 'absolute',
              left: 95,
              top: 423,
              width: 125,
              height: 45,
              borderRadius: 30,
              justifyContent: 'center'
            }}
            fontStyle={{
              color: '#091945',
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
              fontWeight: '600'
            }}
          />
        </View>
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
    alignItems: 'center'
  }
})

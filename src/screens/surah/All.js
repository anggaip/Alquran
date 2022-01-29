/**
 * @format
 * @flow
 */

import * as React from 'react'
import { FlatList, Appearance } from 'react-native'
import { Colors } from 'react-native-ui-lib'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Navigation } from 'react-native-navigation'
import { MyView, MyButton } from '../../components/Custom'

type Props = {
  componentId: string
};

Colors.loadColors({
  dark: '#091945',
  white: '#ffffff'
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

class All extends React.Component<Props> {
  render (): React.Node {
    const DATA = require('../../database/json/surah.json')
    return (
      <MyView flex>
        <FlatList
          data={DATA}
          renderItem={item => this.renderItem(item)}
          keyExtractor={(item, index) => item.number}
        />
      </MyView>
    )
  }

  renderItem ({ item }): React.Node {
    return (
      <MyButton
        textColor
        style={styles.surahList}
        title={item.name.long}
        fontStyle={styles.fontStyle}
        onPress={() => this.onPressItem(item)}
      />
    )
  }

  setColorScheme = (): Object => {
    if (this.isDarkMode()) {
      return styles.darkMode
    }

    return styles.lightMode
  };

  isDarkMode (): boolean {
    return Appearance.getColorScheme() === 'dark'
  }

  onPressItem = item => {
    console.log('item', item)
    Navigation.push(this.props.componentId, {
      component: {
        name: 'single',
        options: {
          topBar: {
            title: {
              text: item.name.long
            }
          }
        },
        passProps: {
          surah: item
        }
      }
    })
  };
}

export default (All: React.AbstractComponent<Props>)

const styles = EStyleSheet.create({
  surahList: {
    alignItems: 'flex-end',
    margin: 0,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 0,
    borderBottomWidth: '0.2rem',
    borderColor: 'rgb(33, 35, 41)'
  },
  darkMode: {
    backgroundColor: 'rgb(33, 35, 41)',
    borderColor: 'rgb(146, 138, 234)'
  },
  lightMode: {
    backgroundColor: '#cfcfcf',
    borderColor: 'rgb(33, 35, 41)'
  },
  fontStyle: {
    fontFamily: '_PDMS_Saleem_QuranFont',
    fontSize: '22rem'
  }
})

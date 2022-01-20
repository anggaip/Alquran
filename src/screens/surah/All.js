/**
 * @format
 * @flow
 */

import * as React from 'react'
import { FlatList } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Navigation } from 'react-native-navigation'
import { MyView, MyButton } from '../../components/Custom'

type Props = {
  componentId: string
};

class All extends React.Component<Props> {
  render (): React.Node {
    const DATA = require('../../database/json/surah.json')
    return (
      <MyView>
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
        style={styles.surahList}
        title={item.name.long}
        fontStyle={styles.fontStyle}
        onPress={() => this.onPressItem(item)}
      />
    )
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
    backgroundColor: '#cfcfcf',
    alignItems: 'flex-end'
  },
  fontStyle: {
    fontFamily: '_PDMS_Saleem_QuranFont',
    color: '#000000',
    fontSize: '16rem'
  }
})

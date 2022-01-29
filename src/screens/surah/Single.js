/**
 * @format
 * @flow
 */

import * as React from 'react'
import { FlatList } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { MyView, MyButton } from '../../components/Custom'

type Props = {
  surah: Object
};

class Single extends React.Component<Props> {
  render (): React.Node {
    const DATA = {
      s1: require('../../database/json/1.json'),
      s2: require('../../database/json/2.json'),
      s3: require('../../database/json/3.json'),
      s4: require('../../database/json/4.json'),
      s5: require('../../database/json/5.json'),
      s6: require('../../database/json/6.json')
    }

    return (
      <MyView flex>
        <FlatList
          data={DATA['s' + this.props.surah.number].verses}
          renderItem={(item, index) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </MyView>
    )
  }

  renderItem ({ item }, index): React.Node {
    return (
      <MyButton
        style={[styles.verses, this.buildWhiteBackground(item)]}
        title={item.text.arab}
        fontStyle={styles.fontStyle}
        onPress={() => this.onPressItem(item)}
      />
    )
  }

  buildWhiteBackground (item): Object {
    if (item.number.inSurah % 2 === 0) {
      return {
        backgroundColor: '#ffffff'
      }
    }

    return null
  }

  onPressItem = item => {
    return null
  };
}

export default (Single: React.AbstractComponent<Props>)

const styles = EStyleSheet.create({
  verses: {
    backgroundColor: '#cfcfcf',
    margin: 0,
    borderRadius: 0,
    alignItems: 'flex-end',
    padding: '10rem',
    borderBottomColor: '#cccccc'
  },
  fontStyle: {
    fontFamily: '_PDMS_Saleem_QuranFont',
    color: '#000000',
    fontSize: '28rem'
  }
})

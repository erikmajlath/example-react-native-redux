import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  ListView,
  ActivityIndicator,
  StyleSheet
} from 'react-native'

export default class Lookup extends React.Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newProps.lookup.matches)
    })
  }

  handleInputChange(event) {
    this.props.fetchMatches(event.nativeEvent.text.trim())
  }

  _renderRow(data) {
    return (
      <View style={styles.row}>
        <Text>
          {data}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          value={this.props.lookup.word}
          onChange={this.handleInputChange.bind(this)}
          placeholder='Start typing' />
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          enableEmptySections={true}/>
        <ActivityIndicator
          style={styles.loader}
          animating={this.props.lookup.isFetching}
          size='large' />
      </View>
    )
  }
}

Lookup.propTypes = {
  lookup: React.PropTypes.object.isRequired,
  fetchMatches: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    position: 'relative'
  },
  input: {
    height: 60,
    padding: 10,
    marginTop: 40,
    borderColor: '#CCC',
    borderWidth: 1
  },
  row: {
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    borderLeftColor: '#CCC',
    borderLeftWidth: 1,
    borderRightColor: '#CCC',
    borderRightWidth: 1,
  },
  loader: {
    position: 'absolute',
    top: 62,
    right: 20
  }
})
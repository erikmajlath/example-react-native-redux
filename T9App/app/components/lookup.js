import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  ListView,
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
      dataSource: this.state.dataSource.cloneWithRows(newProps.matches)
    })
  }

  handleInputChange(event) {
    this.props.fetchMatches(event.nativeEvent.text.trim())
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          value={this.props.word}
          onChange={this.handleInputChange.bind(this)}
          placeholder='Start typing' />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
          enableEmptySections={true}/>
      </View>
    )
  }
}

Lookup.propTypes = {
  word: React.PropTypes.string.isRequired,
  matches: React.PropTypes.array.isRequired,
  fetchMatches: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1F1F1',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  input: {
    height: 60,
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
  }
})
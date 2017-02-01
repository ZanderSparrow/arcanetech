import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import LibraryEntry from './LibraryEntry';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 
    });

    this.dataSource = ds.cloneWithRows(this.props.library)
  }

  renderRow(library) {
    return <LibraryEntry library={library} />
  }

  render() {
    return (
      <ListView 
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
};

const mapStateToProps = state => {
  return { library: state.library };
};

export default connect(mapStateToProps)(LibraryList);

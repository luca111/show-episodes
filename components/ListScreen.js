import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Image } from 'react-native';

import MainListItem from "./MainListItem.js";

export default class ListScreen extends Component {
  static navigationOptions = {
      title: "List of shows"
  };
  constructor(props){
    super(props);
    this.state = {
        nextOffset: 50
    };
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }
  handleLoadMore() {
  return fetch('http://localhost:3000/shows-api?offset=' + this.state.nextOffset + '&entries=25')
    .then((response) => response.json())
    .then((responseJson) => {
        let newDataSource = this.state.dataSource.concat(responseJson);
        this.setState({
        dataSource: newDataSource
        }, function(){

        });
        let newNextOffset = this.state.nextOffset + 25;
        this.setState({
          nextOffset: newNextOffset
        });
    })
    .catch((error) =>{
      console.error(error);
    });
  }
  componentDidMount(){
    return fetch('http://localhost:3000/shows-api?offset=0&entries=50')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){
    return(
        <FlatList
            data={this.state.dataSource}
            style={styles.listContainer}
            renderItem={({item}) =>
                <TouchableHighlight onPress={() => {this.props.navigation.navigate("Details", {itemInfo: item.info})}}>
                    <MainListItem itemId={item.id} itemInfo={item.info} />
                </TouchableHighlight>
            }
            keyExtractor={(item) => item.id.toString()}
            onEndReached={this.handleLoadMore}
            onEndThreshold={0.2}
        />
    );
  }
}

const styles = StyleSheet.create({
    listContainer: {
        // marginTop: 20,
        borderTopWidth: 1,
        borderColor: "#bbb",
        backgroundColor: '#fff',
    }
});

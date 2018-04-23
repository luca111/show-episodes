import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Tile } from "react-native-elements";

export default class ItemDetailsScreen extends Component {
    static navigationOptions = {
        title: "Show details"
    };
    render() {
        return (
            <Tile
                imageSrc={{uri: this.props.navigation.state.params.itemInfo.image.medium}}
                title={this.props.navigation.state.params.itemInfo.name}
            >
                <View>
                    <Text>Air date: {this.props.navigation.state.params.itemInfo.airdate}</Text>
                    <Text>Air time: {this.props.navigation.state.params.itemInfo.airtime}</Text>
                    <Text>Season: {this.props.navigation.state.params.itemInfo.season}</Text>
                    <Text>Number: {this.props.navigation.state.params.itemInfo.number}</Text>
                </View>
            </Tile>
        )
    }
}

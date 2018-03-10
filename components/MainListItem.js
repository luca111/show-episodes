import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { ListItem } from "react-native-elements";

export default class MainListItem extends Component {
    render() {
        return (
            <ListItem
                avatar={{uri: this.props.itemInfo.image.medium}}
                title={this.props.itemInfo.name}
                subtitle={"Air date: " + this.props.itemInfo.airdate}
            />
        )
    }
}

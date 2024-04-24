import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class ComponentValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstVar: '',
            inputText: '',
        };
    }

    componentDidMount() {
        this.setState({ firstVar: 'ComponentDidMount' });
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={{ fontSize: 30, color: 'red' }}>{this.state.firstVar}</Text>
                <TextInput
                    value={this.state.inputText}
                    onChangeText={(value) => {
                        this.setState({ inputText: value });
                    }}
                />
                <Button
                    title="Change value"
                    onPress={() => {
                        this.setState({ firstVar: 'Hello React Native' });
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ComponentValue;

import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const BoxScreen = () => {
    return (
        <View>
            <Text>Box Model</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 10,
        borderColor: 'red',
        margin: 20
    }
});

export default BoxScreen;
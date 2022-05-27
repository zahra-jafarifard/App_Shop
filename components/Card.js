import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.30,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 9,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default Card;

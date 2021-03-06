import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
       // <View style={[styles.containerStyle, props.style]}>
        <View style={[styles.containerStyle, props.style]}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFFFFF',  //YELLOW
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#3F39FA',  //DARK BLUE
        position: 'relative'
    }
};

export { CardSection };
import React, {Component} from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
     {props.children} 
    </View>
  ); 
};
//props.children means whatever is getting passed just copy it

const styles = {
 // give any name to the style
    containerStyle: {
        paddingTop: 20,
        borderWidth: 1,
        borderRadius: 2,  //rounded corners
        borderColor: '#FF336E',  //pink
        borderBottomWidth: 0,
        shadowColor: '#FAF739',  //YELLOW
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2, //keep it same as border radius for smoothness
        elevation:1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
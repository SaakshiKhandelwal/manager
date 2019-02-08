//import libraries
/*import React from 'react';
import { Text, StyleSheet } from 'react-native';

//make component
const Header=()=>{
    return <Text style={styles.container}>ALBUMS!!!</Text>
}

//make component available to other parts of the app
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
  });
 
*/

import React from 'react';
import { Text, View } from 'react-native';

//make component
const Header= (props) =>{
    const {textStyle, viewStyle} =styles;
    return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles={
    viewStyle:{
        backgroundColor: '#F8A6C9',  //GREEN
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,   // height determines white region, more the height more will be the white region
        paddingTop: 20,
        shadowColor: '#FFFC33',  //YELLOW
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.7,
        elevation: 2,
        position: 'relative'

    },
    textStyle:{
        fontSize: 40,
        backgroundColor: '#B1EEFA'  //BLUE
    }
};



export { Header };
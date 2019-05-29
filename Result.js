import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

class ResultsScreen extends React.Component{



  renderItem = item => {
    if(item.name === null || item.name === undefined)
      return(<View>Nothing</View>)
    return(
      <View>
      <Text>
      {item.name} is hard!!
      </Text>
      </View>
    );
  };

  render(){
    const data = this.props.navigation.getParam("data","some default text");
    return(
      <View style ={styles.container}>
        {data.map((item) => this.renderItem(item))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ResultsScreen;

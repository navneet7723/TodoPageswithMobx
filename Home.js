import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, } from 'react-native';
import { Constants } from 'expo';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

class HomeScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      textIn: '',
      list:[
        {
          name: 'Web',
          selected: false,
          editclick: false,
        },
        {
          name: 'Mobile',
          selected: false,
          editclick: false,
        },
        {
          name: 'DevOps',
          selected: false,
          editclick: false,
        },
        {
          name: 'Data Analytics',
          selected: false,
          editclick: false,
        },
        {
          name: 'AI',
          selected: false,
          editclick: false,
        },
        {
          name: 'Security',
          selected: false,
          editclick: false,
        },
        {
          name: 'BI',
          selected: false,
          editclick: false,
        },
      ]
    };
  }



  toggleBox = (item) => {
    item.selected = !item.selected;
    // const index = this.state.list.indexOf(item)
    // if(index>-1)
    // {
    //   this.state.list[index] = item;
    // }
    this.setState({list: this.state.list});
  }

  addItem = () => {
    let item = {
      name: this.state.textIn,
      selected: false,
    }
    this.state.list.push(item);
    let textIn = '';
    this.setState({list: this.state.list, textIn: ''});
  }


  editButton = (item) => {

    item.editclick = !item.editclick;
    let itemIndex = this.state.list.indexOf(item);
    if(item.editclick){      
      this.state.textIn = item.name;
      this.setState({textIn: this.state.textIn});
    }
    else{
      let newItem = {
        name: this.state.textIn,
        selected: false,
      }
      this.state.list[itemIndex] = newItem;
      this.setState({list: this.state.list, textIn: ''});
    }
  }

  deleteOnPress = () => {
    var array2 = this.state.list;
    array2.forEach((item) => {
      if(item.selected) {
        array2.splice(array2.indexOf(item),1);
      }
    })
    array2.forEach((item) => {
      if(item.selected) {
        array2.splice(array2.indexOf(item),1);
      }
    })
    this.setState({array2 : this.state.list});
  }

  renderItem = item => {
    return(
    <View style = {{flexDirection: 'row', padding: 10}}>
      <TouchableOpacity style= {styles.listItem} onPress = {() => this.toggleBox(item)}>
        <Text style = {{color: 'gray'}}>{this.state.list.indexOf(item)+1}. {item.name} </Text>

        {item.selected ?
          <Ionicons size={32} style={{color:"#4f94fe"}} name="md-checkbox"/>
          :
          <MaterialCommunityIcons size={32} style={{color:"#4f94fe"}} name="checkbox-blank-outline"/>
        }
      </TouchableOpacity>
      <TouchableOpacity style = {styles.editButton} onPress = {() => this.editButton(item)}>
        <MaterialCommunityIcons size = {38} color = 'dodgerblue' name = "circle-edit-outline"/>
      </TouchableOpacity>
      </View>
    );
  };

  toNextPage = (item) => {
    let array = [];
    this.state.list.forEach((item) => {
    if(item.selected) {
      array.push(item);
    }
  });

  this.props.navigation.navigate('Results', {data: array});
};

  render(){
    const listvar = this.state.list;
    return(
      <View style = {styles.container}>

      <View style = {{backgroundColor: 'ghostwhite', elevation:10}}>

        <View style = {{flexDirection:'row', alignItems:'center', justifyContent: 'center'}}>
          <Text style = {styles.topText}>Path
          </Text>

          <Text style = {styles.topText2}>Finder
          </Text>
        </View>

      <View style = {styles.topTab}>
        <TextInput
          style={styles.input}
          value={this.state.textIn}
          onChangeText={textIn => this.setState({textIn})}
          placeholder="Full Name of Skill"
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
        />

        <TouchableOpacity onPress ={(item) => this.addItem(item)}>
          <Ionicons size={40}
          style={styles.addBtn} name="md-add"/>
        </TouchableOpacity>
      </View>
      </View>

        <ScrollView style={styles.scrolmenu}>
          {this.state.list.map(item => this.renderItem(item))}
        </ScrollView>

      <View style = {styles.bottomTab}>
        <TouchableOpacity onPress = {() => this.deleteOnPress()}>
        <MaterialCommunityIcons size = {52} color='crimson' name ='delete'/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.nxtbtn} onPress = {() => this.toNextPage(this.state.list)}>
        <Text style = {{
          color: 'white',
        }}>Select!</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 27,
    flex:1,
    backgroundColor: 'yellowgreen',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  topText:{
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 22,
    color: 'dimgray',
  },
  topText2:{
    textAlign: 'center',
    fontSize: 22,
    color: 'dodgerblue',
  },
  topTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  input: {
    margin: 10,
    height: 44,
    width: 260,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#27f',
    borderWidth: 3,
    fontSize: 16,
  },
  addBtn: {
    color:"white",
    backgroundColor: 'dodgerblue',
    paddingHorizontal:7,
    borderRadius: 12
  },

  listItem: {
    backgroundColor: 'white',
    width: 270,
    elevation: 3,
    padding: 10,
    borderWidth: 0,
    borderRadius: 5,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: 40,
  },
  editButton:{
    elevation: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 18.5,
    margin: 20,
  },
  scrolmenu: {
    padding: 10
  },

  bottomTab: {
    paddingHorizontal: 60,
    backgroundColor: 'ghostwhite',
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nxtbtn: {
    marginTop: 6,
    elevation: 3,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    height: 40,
  },


});

export default HomeScreen;

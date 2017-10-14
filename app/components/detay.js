import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import {Entypo} from '@expo/vector-icons';


export default class Detay extends Component{
    static navigationOptions=()=>({
        tabBarVisible: false
    })
    _onPress=()=>{
       const {goBack}=this.props.navigation;
       goBack();
    }
    render(){
        const {title,image,description}=this.props.navigation.state.params;
        return(
            <View style={{flex:1,marginTop:23}}>
                <HeaderDetay onPressIcon={this._onPress} title={title} />
                <View style={{flex:1}}>
                    <View style={{flex:1}}><Image source={{uri:image}} style={{flex:1}} resizeMode={'stretch'} /></View>
                    <View style={{flex:3}}>
                        <Text style={{fontSize:20}}>{description}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

class HeaderDetay extends Component{
    render(){
        const {title,onPressIcon}= this.props;
        return (
            <View style={{flexDirection:'row',backgroundColor:'red',height:50}}>
                <TouchableOpacity style={{justifyContent:'center'}}  onPress={onPressIcon} ><Entypo  name='chevron-left' size={32} />                    
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}><Text style={{textAlign:'center'}} >{title}</Text></View>
            </View>
        )
    }
}
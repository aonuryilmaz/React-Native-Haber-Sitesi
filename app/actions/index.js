import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'

export default class LisItem extends Component{
    render(){
        const {image,title,link,description,onListPress}=this.props 
        return(
            <TouchableOpacity activeOpacity={0.6} onPress={()=>onListPress(title,image,description)}>
            <View style={{flex:1,flexDirection:'row',}} >
                <Image
                 resizeMode={'stretch'}
                 style={{flex:1,height:80}}
                 source={{uri:image[0]}}/>
                 <View style={{flex:3,justifyContent:'center'}}>
                    
                <Text style={{textAlign:'center'}}>{title}</Text>
                 </View>

            </View>
            </TouchableOpacity>
        )
    }
}
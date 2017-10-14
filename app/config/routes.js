import React from 'react';
import {TabNavigator,StackNavigator} from 'react-navigation';
import {Ionicons,FontAwesome,Entypo} from '@expo/vector-icons';

import Ekonomi from '../components/ekonomi';
import Siyaset from '../components/siyaset';
import Spor from '../components/spor';
import Magazin from '../components/magazin';
import Detay from '../components/detay'


export const EkonomiStack=StackNavigator({
    Ekonomi:{
        screen:Ekonomi,  
    },
    Detay:{
        screen:Detay,
        navigationOptions :({navigation}) => ({title:''+navigation.state.params.title+'' ,}),
        
    }
},{
    headerMode:'none',
})
export const SporStack=StackNavigator({
    Spor:{
        screen:Spor,           
        navigationOptions :{
            title:'Spor'
        }
    },
    Detay:{
        screen:Detay
    }
},{headerMode:'none'})
export const MagazinStack=StackNavigator({
    Magazin:{
        screen:Magazin,         
        navigationOptions :{
            title:'Magazin'
        } 
    },
    Detay:{
        screen:Detay
    }
},{headerMode:'none'})
export const SiyasetStack=StackNavigator({
    Siyaset:{
        screen:Siyaset,  
        navigationOptions :{
            title:'Siyaset'
        } 
    },
    Detay:{
        screen:Detay
    }
},{headerMode:'none'})

export const Tabs =TabNavigator({
    Ekonomi:{
        screen:EkonomiStack,   
        navigationOptions :{
            tabBarLabel:'Ekonomi',
            tabBarIcon:({tintcolor})=> <Ionicons name="ios-home-outline" size={32} color={tintcolor} />         
        }     
    },
    Siyaset:{
        screen:SiyasetStack,
         navigationOptions :{
            tabBarLabel:'Siyaset',
            tabBarIcon:({tintcolor})=> <Ionicons name="ios-bulb-outline" size={32} color={tintcolor} />  
        } 
    },
    Spor:{
        screen:SporStack,
         navigationOptions :{
             tabBarLabel:'Spor',
             tabBarIcon:({tintcolor})=> <Ionicons name="ios-football-outline" size={32} color={tintcolor} />  
        } 
    },
    Magazin:{
        screen:MagazinStack,
         navigationOptions :{
            tabBarLabel:'Magazin',
            tabBarIcon:({tintcolor})=> <Ionicons name="ios-rose-outline" size={32} color={tintcolor} />  
        } 
    }
},{
    tabBarPosition:'bottom',
    tabBarOptions:{
        showIcon:true,
        labelStyle:{
            fontSize:12,
        },
        style:{
            height:60,
            backgroundColor:'white'
        },
        activeTintColor:'red',
        inactiveTintColor:'gray'
    }
})

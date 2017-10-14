import React,{Component} from 'react';
import {Navigator,View,Text,Button,StyleSheet,ListView,RefreshControl} from 'react-native';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import {parseString} from 'react-native-xml2js';
import LisItem from '../actions'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Siyaset extends Component{
   constructor(props){
        super(props);
        this.state={data:'',
            dataSource:ds.cloneWithRows([]),
            refreshing:false
        };
        this._renderRow=this._renderRow.bind(this);
    }
    _onPress=(title,image,description)=>{
        console.log(title);
        this.props.navigation.navigate('Detay',{title:title[0],image:image[0],description:description[0]})
    }
    async fetchEko(){
        const uri="http://www.haberturk.com/rss/kategori/siyaset.xml";
        var request =new XMLHttpRequest();
        request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            return;
        }

        if (request.status === 200) {
            var list=[];
            var text=request.responseText;
            parseString(text,(err,result)=>{
                result.rss.channel[0].item.forEach(function(item) {
                 list.push({description:item.description,image:item.image,link:item.link,title:item.title})  
                });
                this.setState({
                    data:result.rss.channel[0],
                    dataSource:ds.cloneWithRows(list)
                })
            })
        } else {
            console.warn('error');
        }
        };

        request.open('GET', uri);
        request.send();        
    }
    componentDidMount(){
        this.fetchEko();
    }
    _onRefresh(){
      this.setState({refreshing:true})
      this.fetchEko().then(()=>{
          this.setState({refreshing:false})
      });
    }
    _renderRow(data){
        return <LisItem onListPress={this._onPress} link={data.link} title={data.title} image={data.image} description={data.description}/>
    }

    render(){
        const headerText=this.state.data.description;
        return (
            <View style={{flex:1,marginTop:23}}> 
                <View style={styles.header}>
                    <Text style={{textAlign:'center',color:'white'}}>{headerText}</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    removeClippedSubviews={false}
                    enableEmptySections={true}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
     container: {
        flexDirection: 'row',
        flex:1,
    },
    header:{
        height:50,
        backgroundColor:'red',
        justifyContent:'center'
    },separator: {
        height:1,
        flex:1,
        backgroundColor: '#8E8E8E',
    }
})
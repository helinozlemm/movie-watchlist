
import React, { Component } from 'react';
import { View, Text, Dimensions,Image,ScrollView,TouchableOpacity,FlatList,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');



class List extends Component{

    state = {
        poster1: []
    }
    componentDidMount(){
        this.readMovie();
    }
    readMovie = async () => {
        try{
           

            let jsonValue= await AsyncStorage.getItem('movies');
            console.log(jsonValue);
            this.setState({poster1: JSON.parse(jsonValue)})
            
            return jsonValue !=null ? JSON.parse(jsonValue): null;
            
       }catch(er){
            console.log(er)
        }
    }


        removeItemValue = async(index) => { 
        
         const rawValue = await AsyncStorage.getItem('movies');
        try {
            const jsonValue = JSON.parse(rawValue) || []; // avoid undefined or null
            const finalValue = [...jsonValue.slice(0, index), ...jsonValue.slice(index + 1)];
            await AsyncStorage.setItem('movies', JSON.stringify(finalValue)); 
            } catch (e) {
                console.log('Parsing failed', e)}
                
            }
      
    

    renderUser = ({item, index}) => {
        return (
          <View style={styles.scroll}>
          
          <View style={styles.section}>
            
            <TouchableOpacity
            onPress={() =>
                Alert.alert(
                    'Delete movie',
                    'Would you like to delete this movie from your watchlist?',
                    [
                        {
                            text:'Yes',
                            onPress: () => this.removeItemValue(index),
                            style:'cancel'
                        },
                        {text:'No', onPress: () => false, style:'cancel'},
                    ]
                )
            }
            >
            <Image
            style={{width:width*0.2, height:height*0.2,marginTop:5,resizeMode:'contain'}}
            source={{uri:item.Poster}}
            />
            </TouchableOpacity>

            <Text style={styles.heading}> Title: {item.Title}</Text>
            
            <Text style={styles.scroll2}>Year: {item.Year}</Text> 
            </View>

            
          </View>
        );
      }

      
    


    render() {
        return(
            <View style={{flex:1,backgroundColor:'#101D5C'}} >
             <FlatList
            numColumns={1}
            keyExtractor={(item,index)=>index.toString()}
            data={this.state.poster1}
            renderItem={this.renderUser}
           
            >
             </FlatList>
           
            </View>
        );

    }

};

export default List;

const styles={

    heading:{
        color:'#060606',
        fontSize:12,
        fontWeight:'700',
        padding:10,
        backgroundColor:'#5C689F',
        flexDirection:'row',
        borderRadius:20,
        marginTop:2,
        width:width*0.4, 
        height:height*0.1,
        marginLeft:10,
        textAlign:'center'
        
        
        
       
    },
    scroll:{
        flex:1,      
        
    },
    
scroll2:{
    flex:1,
    width:width*0.40,
    marginBottom:20,
    fontWeight:'bold',
    marginTop:2,
    marginLeft:15,
    color:'#E5D9D9'
    //alignItems:'center',
    //justifyContent:'center'

},
section:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
   //backgroundColor:'red'
},

}


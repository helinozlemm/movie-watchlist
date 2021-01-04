import React, { Component } from 'react';
import { View, Text, Dimensions,Image,TextInput
, TouchableOpacity,ScrollView,Alert,FlatList} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List, ListItem } from "react-native-elements";
//import { TouchableOpacity } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window');


class Movie extends Component{

    state= {
        apiurl:'http://www.omdbapi.com/?i=tt3896198&apikey=b48d438d',
        s:'',
        results: [],
        selected: {}
    }



    addMovie = async (item) => {

        let arrayItems = await AsyncStorage.getItem('movies');
        arrayItems =JSON.parse(arrayItems);
        if(arrayItems !== null) {
            arrayItems.push(item);
        }else{
            arrayItems = [item]
        }
        await AsyncStorage.setItem('movies',JSON.stringify(arrayItems));
        

    
    }



     searchFunc(s) {
         this.setState({s: s})
         if (this.state.s.length >= 2) {
        axios.get(this.state.apiurl+ "&s="+s).then((response) => 
            this.setState({results: response.data.Search})
            );
         }
           // console.log(this.state.results)
                 
         
     }

     renderUser = ({item, index}) => {
        return (
          <View style={styles.scroll}>
          
            <TouchableOpacity
            onPress={() =>
                Alert.alert(
                    'Add movie',
                    'Would you like to add this movie to your watchlist?',
                    [
                        {
                            text:'Yes',
                            onPress: () => this.addMovie(item),
                            style:'cancel'
                        },
                        {text:'No', onPress: () => false, style:'cancel'},
                    ]
                )
            }>
            <Image
            style={{width:width*0.3, height:height*0.3,marginTop:10}}
            source={{uri:item.Poster}}
            />
            </TouchableOpacity>

            <Text style={styles.heading}> Title: {item.Title}</Text>
            
            <Text style={styles.scroll2}>Year: {item.Year}</Text>
            
          </View>
        );
      }

    

     keyExtractor = (item,index) => index.toString();
   


    render() {
        return(
            <View style={{flex:1,backgroundColor:'#101D5C'}}>
            <View
            style={styles.sectionContainer}>
            

                <View style={styles.section}>

                
                <TextInput style={styles.section2}
                onChangeText = {(s) => this.searchFunc(s)}
                //value={this.state.s}
                placeholder="Movies,Series.."
                 >
                      </TextInput>
                
                      <TouchableOpacity 
                    style={{justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => this.searchFunc()}> 
                    <Image 
                    source ={require('../img/seach.png')}
                    style={{width:width*0.05,height:height*0.03,}}
                    >
                    </Image>
                    </TouchableOpacity>
              
              
                    </View>

                
              
            </View >
            <View style={styles.scroll}>
                
            <FlatList
                numColumns={3}
                keyExtractor={this.keyExtractor}
                data={this.state.results}
                renderItem={this.renderUser}
                >
            </FlatList>
            
            </View>
            
            {/* <ScrollView  
            style={styles.scroll}> 
           
            
                {this.state.results?.map(result => (
                <View 
                key={result.imdbID} 
                style={styles.scroll2}
                >
                <TouchableOpacity
                onPress={() =>
                    Alert.alert(
                        'Add movie',
                        'Would you like to add this movie to your watchlist?',
                        [
                            {
                                text:'Yes',
                                onPress: () => this.addMovie(result.Poster,result.Title),
                                style:'cancel'
                            },
                            {text:'No', onPress: () => false, style:'cancel'},
                        ]
                    )
                }> 
                <Image 
                source={{uri: result.Poster}} // use correct key from result object
                style={{width:width*0.4, height:height*0.3,marginTop:10}}
                />
                </TouchableOpacity>
                <Text style={styles.heading}>{result.Title}</Text>
                </View>
             ))
            }
        
            </ScrollView> */}

           
            </View>
            


        );

    }

};

export default Movie;

const styles= {
    section:{
        backgroundColor:'white',
        borderRadius:10,
        width:width*0.80,
        height:height*0.05,
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:15,
        flexDirection:'row',
        paddingRight:10

        
        
       // marginLeft:50,
        //marginRight:50
        
    },
    section2:{
        borderRadius:10,
        width:width*0.70,
        height:height*0.05,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10

        
        
       // marginLeft:50,
        //marginRight:50
        
    },
    sectionContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
       
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
        marginLeft:15
        //alignItems:'center',
        //justifyContent:'center'
        

    },
    heading:{
        color:'#060606',
        fontSize:12,
        fontWeight:'700',
        padding:10,
        backgroundColor:'#5C689F',
        flexDirection:'row',
        borderRadius:20,
        marginTop:2,
        width:width*0.3, 
        height:height*0.1
        
        
       
    }

    
};



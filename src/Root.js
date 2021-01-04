import React, { Component } from 'react';
import {View,Text,Dimensions} from 'react-native';
import {Router,Scene,Actions} from 'react-native-router-flux';

import Movie from './components/Movie';
import List from './components/List';
import Navigation from './commons/Navigation';
import Likes from './components/Likes';

const {width,height} = Dimensions.get('window');

export default class Root extends Component{
    render() {
        return(
            <Router>
                <Scene
                key='Root'>
                    <Scene
                    key='Movie'
                    component={Movie}
                    hideNavBar                   
                    
                    >                   

                    </Scene>

                   <Scene
                   key='Navigation'
                   component={Navigation}
                   hideNavBar
                   initial                  
                   >
                    
                   </Scene>

                   <Scene
                   key='List'
                   component={List}
                   hideNavBar>

                   </Scene>

                   <Scene
                   key='Likes'
                   component={Likes}
                   hideNavBar>

                   </Scene>

                </Scene>
            </Router>
        );
    }
}
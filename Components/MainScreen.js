import React from 'react';
import { StyleSheet, View, Platform} from 'react-native';
import { Container, Header, Content, Button, Text, Icon} from 'native-base';
import { TabNavigator, TabBarBottom } from "react-navigation";
import Expo from 'expo';

import HomeTab from "./AppTabNavigation/HomeTab";
import AddMediaTab from "./AppTabNavigation/AddMediaTab";
import LikesTab from "./AppTabNavigation/LikesTab";
import SearchTab from "./AppTabNavigation/SearchTab";
import ProfileTab from "./AppTabNavigation/ProfileTab";

class MainScreen extends React.Component {

    state={
    isReady: false
  }

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({isReady:true})
} 

    static navigationOptions = {
        headerLeft : <Icon name="camera" style={{paddingLeft:10}}/>,
        title: "Aquaponik",
        headerRight: <Icon style={{paddingRight:10}} name="send"/>
    }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <AppTabNavigator/>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppTabNavigator = TabNavigator({

    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition:"bottom",
    tabBarComponent: TabBarBottom,
    tabBarOptions:{
        style:{
            ...Platform.select({
                android:{
                    backgroundColor: 'white'
                }
            })
        },
        activeTintColor: 'darkseagreen',
        inactiveTintColor: '#d1cece',
        showLabel:false,
        showIcon: true
    }
})
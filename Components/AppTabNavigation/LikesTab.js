import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Container, Header, Content, Button, Text, Icon} from 'native-base';
import Expo from 'expo';

class LikesTab extends React.Component {

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

    tabBarIcon: ({tintColor}) => (
        <Icon name="heart" style={{color:tintColor}}/>
    )
}


  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
     <View style={styles.container}>
        <Text>Likes</Text>
    </View>
    );
  }
}

export default LikesTab;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Icon} from 'native-base';
import Expo from 'expo';
import CardComponents from "../CardComponents";

class HomeTab extends React.Component {

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
            <Icon name="home" style={{color:tintColor}}/>
        )
    }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponents imageSource="1" likes="30" ketSource="1"/>
          <CardComponents imageSource="2" likes="50" ketSource="2"/>
          <CardComponents imageSource="3" likes="79" ketSource="3"/>
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff'
  },
});

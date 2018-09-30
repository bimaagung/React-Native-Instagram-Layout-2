import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { Button, Text, Icon, Card, CardItem,
Body, Left, Right, Thumbnail  } from 'native-base';
import Expo from 'expo';

class CardComponents extends React.Component {

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
    
    const images = {
        "1": require('../assets/rokok.jpg'),
        "2": require('../assets/svf.png'),
        "3": require('../assets/aquaponik.jpg')
    }

    const ket = {
        "1": '#anti rokok',
        "2": '#smart vertical farming',
        "3": '#aquaponik'

    } 

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Card>
          <CardItem>
              <Left>
                  <Thumbnail source={require('../assets/fotobaru.jpg')}/>
                    <Body>
                        <Text>Bima</Text>
                        <Text note>06 September 2018</Text>
                    </Body>
              </Left>
          </CardItem>
          <CardItem cardBody>
              <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex:1 }}/>
          </CardItem>
          <CardItem style={{ height:45 }}>
                <Left>
                    <Button transparent>
                        <Icon name="ios-heart-outline"
                         style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="ios-chatbubbles-outline"
                         style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name="ios-send-outline"
                         style={{ color: 'black' }} />
                    </Button>
                </Left>
          </CardItem>
          <CardItem style={{height:20}}>
              <Text>{this.props.likes}</Text>
          </CardItem>
          <CardItem>
              <Body>
                  <Text>
                      <Text style={{ fontWeight:'900' }} >Bima Agung </Text>
                      {ket[this.props.ketSource]}
                  </Text>
              </Body>
          </CardItem>
      </Card>
    );
  }
}

export default CardComponents;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

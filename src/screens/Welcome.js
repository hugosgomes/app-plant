import React from 'react'
import { Dimensions, StyleSheet, FlatList, Image } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

const Welcome = (props) => {
  const navigationOptions = {
    header: null,
  }

  const { width, height } = Dimensions.get('window');

  
  const renderIllustrations = () => { 
    const illustrations = props.illustrations || [
      {id: 1, source: require('../../assets/images/illustration_1.png')},
      {id: 2, source: require('../../assets/images/illustration_2.png')},
      {id: 3, source: require('../../assets/images/illustration_3.png')},
    ];

    return (
      <FlatList 
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        // extraData
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({item}) => (
          <Image 
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: 'visible'}}
          />
        )}
      />
    )
  }
  const renderSteps = () => { 
    return (
      <Block>
        <Text>* * *</Text>
      </Block>
    )
  }

  return (
    <Block>
      <Block center middle flex={0.3}>
        <Text h1 center bold>
          Your Home.
          <Text h1 primary>Greener</Text>
        </Text>
        <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
          Enjoy the experience
        </Text>
      </Block>
      <Block center middle>
        {renderIllustrations()}
        {renderSteps()}
      </Block>
      <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
        <Button gradient onPress={(() => {})}>
          <Text center semibold white>Login</Text>
        </Button>
        <Button shadow onPress={(() => {})}>
          <Text center semibold>Signup</Text>
        </Button>
        <Button onPress={(() => {})}>
          <Text center caption gray>Terms of Service</Text>
        </Button>
      </Block>
    </Block>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});
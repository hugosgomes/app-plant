import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

import Navigation from './src/navigation';
import { Block } from './src/components'

const images = [
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/avatar.png'),
];

export default function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleResourceAsync = async () => {
    // we're caching all the images
    // for brtter perfonamnce on the app
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={ handleResourceAsync }
        onFinish={() => setIsLoadingComplete(true)}
        onError={console.warn}
      />
    ); 
  }

  return (
    <Block>
      <Navigation />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

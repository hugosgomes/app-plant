import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Button, Block, Text, Card, Badge } from '../components'
import { theme, mocks } from '../constants';

const Browse = () => {
  const [active, setActive] = useState('Products');
  const [categoriesState, setCategoriesState] = useState([])
  const profile = mocks.profile;
  const categories = mocks.categories;
  const tabs = ['Products', 'Inspirations', 'Shop'];
  const navigation = useNavigation();

  useEffect(() => {
      setCategoriesState(categories);
  }, []);

  const handleTab = tab => {
    const filtered = categories.filter(
      category => category.tags.includes(tab.toLowerCase())
    );

    setActive(tab);
    setCategoriesState(filtered);
  }

  const renderTab = (tab) => {
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[
          styles.tab,
          isActive ? styles.active : null
        ]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <Block style={{backgroundColor: 'white'}}>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>Vasculhe</Text>
        <Button onPress={() => navigation.navigate('Settings')}>
          <Image 
            source={profile.avatar}
            style={styles.avatar}
          />
        </Button>
      </Block>

      <Block flex={false} row style={styles.tabs}>
        {tabs.map(tab => renderTab(tab))}
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: theme.sizes.base }}
      >
        <Block flex={false} row space="between" style={styles.categories}>
          {categoriesState.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => navigation.navigate('Explore')}
            >
              <Card center middle shadow style={styles.category}>
                <Badge 
                  margin={[0, 0, 15]}
                  size={50}
                  color="rgba(41,216,143,0.20)"
                  style={{borderRadius: 50}}  
                >
                  <Image source={category.image} />
                </Badge>
                <Text medium height={20}>{category.name}</Text>
                <Text gray caption>{category.count} produtos</Text>
              </Card>
            </TouchableOpacity>          
          ))}
        </Block>
      </ScrollView>
    </Block>
  )
}

export default Browse

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },

  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },

  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: theme.sizes.base,
    marginBottom: theme.sizes.base / 2,
    marginHorizontal: theme.sizes.base * 2
  },

  tab: {
    marginRight: theme.sizes.base *2,
    paddingBottom: theme.sizes.base
  },

  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },

  category: {
    width: 150,
    height: 150,
  },

  categories:{
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    paddingTop: theme.sizes.base,
    marginBottom: theme.sizes.base * 3.5,
    backgroundColor: '#f3f3f3',
  }
});
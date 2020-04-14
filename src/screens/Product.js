import React from 'react'
import { StyleSheet, Image, ScrollView, Dimensions, Animated, FlatList } from 'react-native'

import { Block, Text, Divider } from '../components'
import { theme, mocks } from '../constants';

const { width, height } = Dimensions.get('window');

const Product = () => {
  const product = mocks.products[0];

  const renderGallery = () => {
    return (
      <FlatList
        horizontal
        pagingEnable
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        )}
      />
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderGallery()}
      <Block style={styles.product}>
        <Text h2 bold>{product.name}</Text>
        <Block flex={false} row margin={[theme.sizes.base, 0]}>
          {product.tags.map(tag => (
            <Text caption gray key={`tag-${tag}`} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </Block>
        <Text gray light height={22} align="justify">{product.description}</Text>

        <Divider margin={[theme.sizes.padding * 0.9, 0]}/>

        <Block>
          <Text semibold>Galeria</Text>
          <Block row margin={[theme.sizes.padding * 0.9, 0]}>
            {product.images.slice(1, 3).map(
              (image, index) => (
                <Image
                  key={`gallery-${index}`}
                  source={image}
                  style={styles.image}
                />
              )
            )}
            <Block
              flex={false}
              card 
              center
              middle
              color="rbga(197, 204, 214, 0.20)"
              style={styles.more}
            >
              <Text gray>+{product.images.slice(3).length}</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  )
}

export default Product

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
    backgroundColor: '#fff',
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625,
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base,
  },
  more: {
    width: 55,
    height: 55,
  },
})

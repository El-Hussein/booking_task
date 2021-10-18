import React, {FC, useState} from 'react';
import {Image, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

interface Props {
  slides: string[];
}

const ImageSlider: FC<Props> = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        data={slides}
        layout="default"
        renderItem={({item}) => (
          <Image
            style={styles.swiperImageStyle}
            source={{uri: item}}
            resizeMode="cover"
          />
        )}
        sliderWidth={420}
        itemWidth={420}
        onSnapToItem={index => setCurrentIndex(index)}
        autoplay
        loop
      />
      <View style={styles.swiperPaginationStyle}>
        {slides.map((item, index) => {
          const check = index === currentIndex;
          return (
            <View
              key={`dot-${index}`}
              style={[
                styles.swiperDotStyle,
                check && styles.swiperActiveDotStyle,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ImageSlider;

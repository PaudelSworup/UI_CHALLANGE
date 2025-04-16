import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type CardProps = {
  image: string;
  name: string;
  description: string;
};

const Cards: React.FC<CardProps> = ({image, name, description}) => {
  return (
    <View
      className="mt-2 bg-white p-3 rounded-md"
      style={{width: wp(60), height: hp(40)}}>
      <View>
        <Image
          source={{uri: image}}
          className="w-full h-40 rounded-lg"
          resizeMode="cover"
        />
        {/* <Image /> image goes here and apply image height accordingly */}
      </View>
      <View className="space-y-2">
        <Text className="font-bold text-black/90">{name}</Text>
        <Text className="font-light text-gray-600">{description}</Text>
      </View>
    </View>
  );
};

export default Cards;

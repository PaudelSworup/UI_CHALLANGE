import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PlayIcon} from 'react-native-heroicons/outline';

type CardProps = {
  image: string;
  name: string;
  description: string;
};

const AccomodationCards: React.FC<CardProps> = ({image, name, description}) => {
  return (
    <View className="mt-2 bg-white p-3 rounded-md">
      <View className="flex-row space-x-4 items-center">
        {/* Image with centered play icon */}
        <View style={{width: wp(20), height: hp(10)}}>
          <Image
            source={{uri: image}}
            className="rounded-lg"
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
        </View>

        <View className="space-y-2 flex-1">
          <Text className="font-bold text-black/90">{name}</Text>
          <Text className="font-light text-gray-600">{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default AccomodationCards;

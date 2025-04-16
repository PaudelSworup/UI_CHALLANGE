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

const CulturalCards: React.FC<CardProps> = ({image, name, description}) => {
  return (
    // <View className="mt-2 bg-white p-3 rounded-md">
    //   <View className="flex-row space-x-4 items-center">
    //     <Image
    //       source={{uri: image}}
    //       className="rounded-lg"
    //       style={{width: wp(20), height: hp(10)}}
    //       resizeMode="cover"
    //     />

    //     <View className="space-y-2 flex-1">
    //       <Text className="font-bold text-black/90">{name}</Text>j
    //       <Text className="font-light text-gray-600">{description}</Text>
    //     </View>
    //     {/* <Image /> image goes here and apply image height accordingly */}
    //   </View>
    // </View>

    <View className="mt-2 bg-white p-3 rounded-md">
      <View className="flex-row space-x-4 items-center">
        {/* Image with centered play icon */}
        <View style={{width: wp(20), height: hp(10)}} className="relative">
          <Image
            source={{uri: image}}
            className="rounded-lg"
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
          <View className="absolute mt-4 ml-4  justify-center items-center">
            <View className="bg-black/50 p-2 rounded-full">
              <PlayIcon size={hp(2)} color="white" />
              {/* <Icon name="play" size={18} color="white" /> */}
            </View>
          </View>
        </View>

        <View className="space-y-2 flex-1">
          <Text className="font-bold text-black/90">{name}</Text>
          <Text className="font-light text-gray-600">{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default CulturalCards;

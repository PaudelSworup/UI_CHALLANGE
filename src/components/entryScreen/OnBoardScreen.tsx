import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const slides = [
  {
    key: 1,
    title: 'Films, Programmes and games in just a few taps',
    text: 'Plans start at USD 2.99.',
    image: require('../../../assets/asset1.jpg'),
  },

  {
    key: 2,
    title: 'A plan for every fan',
    plans: [
      {
        key: 1,
        name: 'Mobile',
        price: 'USD 2.99',
        vq: 'Fair',
        resolution: '480p(SD)',
        device: 'Mobile Phone, Tablet',
        sameTime: 1,
        download: 1,
      },
      {
        key: 2,
        name: 'Standard',
        price: 'USD 3.99',
        vq: 'Good',
        resolution: '720p(HD)',
        device: 'TV, Computer, Mobile Phone, Tablet',
        sameTime: 1,
        download: 1,
      },
      {
        key: 3,
        name: 'Standred',
        price: 'USD 7.99',
        vq: 'Great',
        resolution: '1080p(full HD)',
        device: 'TV, Computer, Mobile Phone, Tablet',
        sameTime: 2,
        download: 2,
      },
      {
        key: 4,
        name: 'Premium',
        price: 'USD 9.99',
        vq: 'Best',
        resolution: '4K(Ultra HD) + HDR',
        audio: 'Included',
        device: 'TV, Computer, Mobile Phone, Tablet',
        sameTime: 4,
        download: 4,
      },
    ],
  },
];

const OnBoardScreen = () => {
  return (
    <SafeAreaView>
      <View className="h-full p-4 " style={{backgroundColor: 'black'}}>
        <View className="flex-1 justify-between gap-4">
          <View>
            <Text className="text-white text-center" style={{fontSize: hp(3)}}>
              A plan for every fan
            </Text>
          </View>

          <View className="flex-row justify-center">
            {[0, 1, 2, 3].map(box => (
              <View
                key={box}
                className=" bg-[#222] m-2"
                style={{height: hp(10), width: hp(10)}}>
                <View className="p-3 space-y-1 ">
                  <Text
                    className="font-bold text-white tracking-widest"
                    style={{fontSize: hp(1.3)}}>
                    Mobile
                  </Text>
                  <Text className="font-light text-white">480p</Text>
                </View>
              </View>
            ))}
          </View>

          {/* <View
            className=" bg-red-500"
            style={{height: hp(20), width: hp(20)}}></View> */}

          <View className="flex-1">
            {[0, 1, 2, 3].map(key => (
              <View key={key} className="flex-row justify-between p-3">
                <Text
                  className="text-gray-500 font-bold"
                  style={{fontSize: hp(2)}}>
                  Monthly price
                </Text>
                <Text className="text-white font-bold">2.99</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;

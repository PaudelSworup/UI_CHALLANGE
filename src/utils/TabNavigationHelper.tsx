import {
  HomeIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
  HeartIcon,
} from 'react-native-heroicons/solid';
import {
  HomeIcon as HomeOutline,
  Cog6ToothIcon as SettingsOutline,
  ShoppingCartIcon as ShoppingCartOutlineIcon,
  HeartIcon as HeartOutlineIcon,
  BellIcon as Notification,
  FireIcon as FootPrint,
  MapIcon as Map,
  ChartBarIcon as Network,
} from 'react-native-heroicons/outline';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NavigationStrings from '../constants/NavigationStrings';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const getTabBarIcon = (
  routeName: string,
  focused: boolean,
  size: number,
  color: string,
) => {
  switch (routeName) {
    case NavigationStrings.HOME:
      return focused ? (
        <LinearGradient
          colors={['#4fa68e', '#154b3f', '#4fa68e']}
          className="rounded-full flex-1 justify-center items-center w-full">
          <HomeIcon width={wp(5)} height={hp(3)} color={color} />
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#4fa68e', '#154b3f', '#4fa68e']}
          className="rounded-full flex-1 justify-center items-center w-full">
          <HomeIcon width={wp(5)} height={hp(3)} color={color} />
        </LinearGradient>
      );

    case NavigationStrings.NOTIFICATION:
      return focused ? (
        <Notification width={wp(5)} height={hp(3)} color={color} />
      ) : (
        <Notification width={wp(5)} height={hp(3)} color={color} />
        // <ShoppingCartOutlineIcon width={wp(5)} height={hp(3)} color={color} />
      );

    case NavigationStrings.FOOT:
      return focused ? (
        <FootPrint width={wp(5)} height={hp(3)} color={color} />
      ) : (
        <FootPrint width={wp(5)} height={hp(3)} color={color} />
      );

    case NavigationStrings.MAP:
      return focused ? (
        <Map width={wp(5)} height={hp(3)} color={color} />
      ) : (
        <Map width={wp(5)} height={hp(3)} color={color} />
      );

    case NavigationStrings.NETWORK:
      return focused ? (
        <Network width={wp(5)} height={hp(3)} color={color} />
      ) : (
        <Network width={wp(5)} height={hp(3)} color={color} />
      );
    default:
      return <HomeIcon width={wp(5)} height={hp(3)} color={color} />;
  }
};

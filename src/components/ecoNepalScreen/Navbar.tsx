import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleInput = () => {
    setShowInput(prev => !prev);
  };

  return (
    <SafeAreaView>
      <View style={styles.navContainer}>
        {/* Navbar Top Row */}
        <View className="flex-row justify-between items-center p-2">
          <LinearGradient
            colors={['#4fa68e', '#154b3f', '#4fa68e']}
            className="rounded-2xl px-3 py-1 flex-row space-x-3 items-center">
            <MapPinIcon className="h-3 w-5" color="white" />
            <Text className="text-white" style={{fontSize: hp(2)}}>
              Pokhara
            </Text>
          </LinearGradient>

          <View className="flex-row space-x-1">
            <TouchableOpacity onPress={toggleInput}>
              <MagnifyingGlassIcon style={{width: wp(6), height: hp(4)}} />
            </TouchableOpacity>
            <UserCircleIcon style={{width: wp(6), height: hp(4)}} />
          </View>
        </View>

        {/* Conditional Search Input */}
        {showInput && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search here..."
              placeholderTextColor="#666"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    borderColor: '#eee',
  },
  inputContainer: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  input: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    fontSize: hp(2),
    color: '#000',
  },
});

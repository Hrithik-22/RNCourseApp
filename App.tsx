/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';
function App() {
  return (
    <SafeAreaView>
      <View className=" bg-cyan-300 justify-center items-center">
        <Text className=" color-black text-2xl">HI</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

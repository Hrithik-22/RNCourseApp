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
    <SafeAreaView className="flex-1">
      <View className=" bg-cyan-300 justify-center items-center">
        <Text className="text-2xl color-black">HI</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

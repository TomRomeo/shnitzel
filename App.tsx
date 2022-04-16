import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import globalStyles from './styles/global.scss';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.white} >Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}
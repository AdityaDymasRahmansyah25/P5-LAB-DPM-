import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import ArtworkDetailScreen from './screens/ArtworkDetailScreen';

const Stack = createStackNavigator();

const theme = {
  colors: {
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#121212',
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Galeri Seni Digital' }} />
          <Stack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Koleksi Seni' }} />
          <Stack.Screen name="ArtworkDetail" component={ArtworkDetailScreen} options={{ title: 'Detail Karya' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

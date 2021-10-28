import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Home from '../screens/Home'
import AnimalProfile from '../screens/AnimalProfile'
import EditAnimalProfile from '../screens/EditAnimalProfile'


const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#40444B',
      borderBottomColor: '#40444B',
    },
    headerTintColor: '#fff',
    cardStyle: { backgroundColor: "#363940" }
  }}>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: null,
        headerLeft: null,
        headerTitleAlign: 'center',
        headerStyle: {
          height: 80, // Especifica a altura do custom header
          backgroundColor: '#40444B'
        },
        headerTitle: (props) => ( // App Logo
          <Image
            style={{ width: 50, height: 200, alignSelf: 'center' }}
            source={icon}
            resizeMode='contain'
          />
        )
      }}
    />
    <AppStack.Screen name="Configurações"
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
          fontFamily: 'Nunito'
        }
      }}
      component={SettingsScreen} />
  </AppStack.Navigator>
);

export default AppRoutes
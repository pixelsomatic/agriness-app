import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Home from '../screens/Home'
import AnimalProfile from '../screens/AnimalProfile'
import EditAnimalProfile from '../screens/EditAnimalProfile'


const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: 'Agriness',
        headerLeft: null,
        headerTitleAlign: 'center',
      }}
    />
    <AppStack.Screen name="Perfil"
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
        }
      }}
      component={AnimalProfile} />
    <AppStack.Screen name="Editar Perfil de Animal"
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
        }
      }}
      component={EditAnimalProfile} />
  </AppStack.Navigator>
);

export default AppRoutes
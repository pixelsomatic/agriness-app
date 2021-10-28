import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import PreRegisterScreen from '../screens/PreRegister'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="PreRegister" options={{ headerShown: false }} component={PreRegisterScreen} />
    <AuthStack.Screen name="Login"
      options={{
        title: 'Entrar',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Nunito'
        },
        animationTypeForReplace: 'push'
      }}
      component={LoginScreen} />
    <AuthStack.Screen name="Criar sua conta"
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Nunito'
        },
        animationTypeForReplace: 'push'
      }}
      component={RegisterScreen} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
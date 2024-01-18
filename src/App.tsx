// src/App.tsx
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import client from './utils/apollo'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Rick & Morty characters' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApolloProvider>
)

export default App

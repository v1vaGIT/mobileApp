import 'react-native-gesture-handler';
import React from 'react';

import CoursesScreen from './screens/Courses/Courses'
import ExamsScreen from './screens/Exams'
import ResultsScreen from './screens/Results'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tabs = createBottomTabNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Courses' component={CoursesScreen} />
        <Tabs.Screen name='Exams' component={ExamsScreen} />
        <Tabs.Screen name='Results' component={ResultsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

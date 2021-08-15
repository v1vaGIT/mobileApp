import 'react-native-gesture-handler';
import React from 'react';

import CoursesScreen from '../screens/Courses/Courses'
import ExamsScreen from '../screens/Exams/Exams'
import ResultsScreen from '../screens/Results'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tabs = createBottomTabNavigator()

export default function AppNavigator() {
  return(
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Курсы' component={CoursesScreen} />
        <Tabs.Screen name='Экзамены' component={ExamsScreen} />
        <Tabs.Screen name='Ведомость' component={ResultsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
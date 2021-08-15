import React, { useState } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { MainScreen } from './Main'
import { CourseCard } from './CourseCard'

const Courses = createStackNavigator()

const CoursesScreen = () => (
    <Courses.Navigator>
        <Courses.Screen name='Course Main' component={MainScreen} />
        <Courses.Screen name='Course Card' component={CourseCard} />
    </Courses.Navigator>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CoursesScreen
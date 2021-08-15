import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { MainScreen } from './Main'
import { ExamCard } from './ExamCard'

const Exams = createStackNavigator()

const ExamsScreen = () => [
    <Exams.Navigator>
        <Exams.Screen name='Экзамены' component={MainScreen} />
        <Exams.Screen name='Exam Card' component={ExamCard} />
    </Exams.Navigator>
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ExamsScreen
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import CoursesScreen from '../screens/courses'
import ExamsScreen from '../screens/exams'
import ResultsScreen from '../screens/results'

const _CoursesNavigator = createStackNavigator({
    Courses:{
        screen: CoursesScreen,
        navigationOptions:{
            title: 'Курсы'
        }
    }
})
const _ExamsNavigator = createStackNavigator({
    Courses:{
        screen: ExamsScreen,
        navigationOptions:{
            title: 'Экзамены'
        }
    }
})
const _ResultsNavigator = createStackNavigator({
    Courses:{
        screen: ResultsScreen,
        navigationOptions:{
            title: 'Ведомость'
        }
    }
})

const AppNavigator = createBottomTabNavigator({
    Courses:{
        screen: _CoursesNavigator,
        navigationOptions:{
            title: 'Курсы'
        }
    },
    Exams:{
        screen: _ExamsNavigator,
        navigationOptions:{
            title: 'Экзамены'
        }
    },
    Results:{
        screen: _ResultsNavigator,
        navigationOptions:{
            title: 'Ведомость'
        }
    }
})

export default createAppContainer(AppNavigator)

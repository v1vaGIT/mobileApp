import React, { useState } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const CoursesScreen = () => (
    <View style={styles.container}>
        <Text>Курсы.</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CoursesScreen
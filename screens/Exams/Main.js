import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { exam_data } from '../../data/examsArr'

export const MainScreen = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Exam Card', {
                title: item.title
            })}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={exam_data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
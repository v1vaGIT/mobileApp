import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ResultsScreen = () => (
    <View style={styles.container}>
        <Text>Ведомость.</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ResultsScreen
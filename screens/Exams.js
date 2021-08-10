import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ExamsScreen = () => (
    <View style={styles.container}>
        <Text>Экзамены.</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ExamsScreen
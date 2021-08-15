import React, { useState } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

export const ExamCard = ({ route }) => {

    return (
        <Text>{route.params.title}</Text>
    )
}
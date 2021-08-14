import React, { useState } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

export const CourseCard = ({ route }) => {

    return (
        <Text>{route.params.title}</Text>
    )
}
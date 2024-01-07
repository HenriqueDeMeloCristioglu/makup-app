import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Hello, <Text style={styles.strong}>Jane</Text></Text>
      </View>
    </View>
  )
}

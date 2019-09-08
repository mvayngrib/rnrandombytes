/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react'
import {StyleSheet, View, Text, NativeModules} from 'react-native'
import {randomBytes} from 'react-native-randombytes'

const App = () => {
  const bytes = randomBytes(32)
  return (
    <View style={styles.container}>
      <Text>random bytes: {bytes}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App

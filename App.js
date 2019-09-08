/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react'
import {StyleSheet, View, Text, NativeModules} from 'react-native'
import base64 from 'base64-js'

const {RNRandomBytes} = NativeModules

const App = () => {
  const [error, setError] = React.useState(null)
  const [bytes, setBytes] = React.useState(null)
  React.useEffect(() => {
    RNRandomBytes.randomBytes(32, (err, bytes) => {
      if (err) {
        setError(err)
      } else {
        setBytes(base64.toByteArray(bytes).join(','))
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      {error && <Text>{error.message}</Text>}
      {bytes && <Text>random bytes: {bytes}</Text>}
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

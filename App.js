import * as React from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',

    }
  }




  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.androidSafeArea} />
        <Header
          centerComponent={{ text: 'Monkey Chunkey', style: { color: 'white', alignSelf: 'center' } }}
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.setState({
              text: text,
            })
          }}
          value={this.state.text}
        />

        <TouchableOpacity style={styles.button} onPress={() =>
          this.setState({
            displayText: this.state.text,
          })
        } >
          <Text> Go </Text>
        </TouchableOpacity>
        <View>
          <Text>{this.state.displayText}</Text>
        </View>


      </SafeAreaProvider >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 400,
    alignSelf: 'center',
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center'
  }


});

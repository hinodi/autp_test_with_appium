import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class App extends React.Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.count}</Text>
        <Button
          title="Click me"
          accessibilityLabel="button_1"
          onPress={() =>
            this.setState((state) => ({
              count: state.count + 1,
            }))
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default App;

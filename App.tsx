import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

class App extends Component {
  constructor(props: any) {
    super(props);

    BackgroundTimer.runBackgroundTimer(() => {
      this.setState({uuid: uuid()});
    }, 30 * 60 * 1000);

    this.state = {
      uuid: uuid(),
    };
  }

  public componentDidMount() {
    BackgroundTimer.start();
  }

  public render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.mainView}>
            <Text>Your current ID:</Text>
            <Text style={styles.headline}>{this.state.uuid}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 0,
    width: 320,
  },
});

export default App;

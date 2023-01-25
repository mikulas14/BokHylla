import React, {useState} from "react";
import {StyleSheet, View, Switch, Alert} from "react-native";

function CupertinoSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    Alert.alert(
        'Coming Soon !',
        `Dark mode under construction.`,
        [
          {text: 'Hmm, okay'},
        ],
        { cancelable: true }
    );
  }

  return (
    <View style={styles.container}>
      <Switch
          trackColor={{ true: "#4CD964", false: "#9E9E9E" }}
          onValueChange={toggleSwitch}
          value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  switch1: {
    width: 45,
    height: 22
  }
});

export default CupertinoSwitch;

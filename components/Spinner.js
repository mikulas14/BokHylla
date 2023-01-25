import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

function Spinner(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ActivityIndicator style={styles.activityIndicator1}></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  activityIndicator1: {
    width: 50,
    height: 50
  },
});

export default Spinner;

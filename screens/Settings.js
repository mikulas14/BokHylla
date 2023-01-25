import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, Text, TouchableOpacity, Alert} from "react-native";
import styles from "../styles/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import CupertinoSwitch from "../components/CupertinoSwitch";

const clearLocalStorage = async () => {
    try {
        await AsyncStorage.clear();
        Alert.alert(
            'Storage cleared',
            `You can start adding books again.`,
            [
                {text: 'OK'},
            ],
            { cancelable: true }
        );
    } catch (error) {
        Alert.alert(
            'Storage already clear',
            `You can start adding books again.`,
            [
                {text: 'OK'},
            ],
            { cancelable: true }
        );
    }
};

const Settings = () => {

    return(
    <View style={styles.container}>

        <View style={styles.settingsContainer}>

            <View style={styles.resetContainer}>
                <Ionicons  name="server-outline" size={40} color="#353535" />

                <Text style={styles.textStReset}>Clear Storage</Text>

                <View style={styles.resetButton}>
                    <TouchableOpacity onPress={() =>  clearLocalStorage()}>
                        <Ionicons  name="reload-outline" size={30} color="#353535" />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.resetContainer}>
                <Ionicons  name="moon-outline" size={40} color="#353535" />
                <Text style={styles.textStDark}>Dark Mode</Text>

                <View style={styles.darkmodeButton}>
                    <CupertinoSwitch></CupertinoSwitch>
                </View>
            </View>
        </View>
            <View style={styles.info}>
                <Text>BokHylla | Version 0.1.0 | Contains lots of bugs </Text>
            </View>
    </View>
    );
};


export default Settings;

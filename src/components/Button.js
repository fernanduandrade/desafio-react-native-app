import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
    appButtonContainer: {
      marginTop: 10,
      elevation: 8,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 310,
      backgroundColor: "#FFCE00"
    },
    appButtonText: {
      fontSize: 18,
      color: "#292929",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
});

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
	<Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)

export default AppButton;

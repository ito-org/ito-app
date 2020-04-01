import React from "react";
import { StyleSheet, Button, Text, TextInput } from "react-native";

export class ConfirmationCode extends React.Component {
    render() {
        let trashStyle = StyleSheet.create( {header: {textAlign: "center", fontSize:20, padding: 5, paddingBottom: 50}});
        return (
            <>
                <TextInput placeholder="Enter confirmation code"></TextInput>
                <Button title="OK" onPress={() => this.props.navigation.navigate("DataUpload")}></Button>

                
            </>
        )
    }
}